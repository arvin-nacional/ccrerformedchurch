import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import {
  revalidateDelete,
  revalidateThinkingBiblically,
} from './hooks/revalidateThinkingBiblically'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const ThinkingBiblically: CollectionConfig<'thinking-biblically'> = {
  slug: 'thinking-biblically',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    contentType: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'contentType', 'publishedDate', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'thinking-biblically',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'thinking-biblically',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'contentType',
      type: 'select',
      required: true,
      defaultValue: 'article',
      options: [
        {
          label: 'Article',
          value: 'article',
        },
        {
          label: 'Video',
          value: 'video',
        },
      ],
      label: 'Content Type',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Image',
              required: true,
            },
            {
              name: 'youtubeUrl',
              type: 'text',
              label: 'YouTube Video URL',
              admin: {
                description:
                  'Enter the full YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID). Required for video content.',
                condition: (data) => data.contentType === 'video',
              },
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
              label: 'Description',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                },
              }),
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'author',
              type: 'text',
              label: 'Author',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'publishedDate',
              type: 'date',
              required: true,
              label: 'Published Date',
              admin: {
                position: 'sidebar',
                date: {
                  pickerAppearance: 'dayOnly',
                },
              },
            },
            {
              name: 'readTime',
              type: 'number',
              label: 'Read Time (minutes)',
              admin: {
                position: 'sidebar',
                description: 'Estimated reading time for articles',
                condition: (data) => data.contentType === 'article',
              },
            },
            {
              name: 'duration',
              type: 'number',
              label: 'Duration (minutes)',
              admin: {
                position: 'sidebar',
                description: 'Video duration',
                condition: (data) => data.contentType === 'video',
              },
            },
          ],
          label: 'Details',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateThinkingBiblically],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
