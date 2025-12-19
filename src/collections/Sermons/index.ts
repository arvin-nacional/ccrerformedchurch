import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateSpeaker } from './hooks/populateSpeaker'
import { revalidateDelete, revalidateSermon } from './hooks/revalidateSermon'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const Sermons: CollectionConfig<'sermons'> = {
  slug: 'sermons',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    series: true,
    speaker: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'series', 'speaker', 'sermonDate', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'sermons',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'sermons',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Sermon Title',
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
            },
            {
              name: 'youtubeUrl',
              type: 'text',
              label: 'YouTube Video URL',
              admin: {
                description:
                  'Enter the full YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)',
              },
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
              label: 'Sermon Description',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                },
              }),
            },
            // {
            //   name: 'content',
            //   type: 'richText',
            //   editor: lexicalEditor({
            //     features: ({ rootFeatures }) => {
            //       return [
            //         ...rootFeatures,
            //         HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            //         FixedToolbarFeature(),
            //         InlineToolbarFeature(),
            //         HorizontalRuleFeature(),
            //       ]
            //     },
            //   }),
            //   label: 'Full Sermon Content',
            // },
            // {
            //   name: 'keyPoints',
            //   type: 'array',
            //   label: 'Key Points',
            //   fields: [
            //     {
            //       name: 'point',
            //       type: 'richText',
            //       required: true,
            //       editor: lexicalEditor({
            //         features: ({ rootFeatures }) => {
            //           return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            //         },
            //       }),
            //     },
            //   ],
            // },
            // {
            //   name: 'scriptureReferences',
            //   type: 'array',
            //   label: 'Scripture References',
            //   fields: [
            //     {
            //       name: 'reference',
            //       type: 'text',
            //       required: true,
            //       label: 'Reference (e.g., Hebrews 11:1-8)',
            //     },
            //   ],
            // },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'series',
              type: 'relationship',
              relationTo: 'sermon-series',
              label: 'Sermon Series',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'speaker',
              type: 'relationship',
              relationTo: 'speakers',
              required: true,
              label: 'Speaker',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'sermonDate',
              type: 'date',
              required: true,
              label: 'Sermon Date',
              admin: {
                position: 'sidebar',
                date: {
                  pickerAppearance: 'dayOnly',
                },
              },
            },
            {
              name: 'duration',
              type: 'number',
              label: 'Duration (minutes)',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'scriptureBook',
              type: 'text',
              label: 'Primary Scripture Book',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'scriptureReference',
              type: 'text',
              label: 'Primary Scripture Reference',
              admin: {
                position: 'sidebar',
              },
            },
          ],
          label: 'Details',
        },
        {
          fields: [
            {
              name: 'videoFile',
              type: 'upload',
              relationTo: 'media',
              label: 'Video File (MP4)',
              admin: {
                description: 'Upload the sermon video file',
              },
            },
            {
              name: 'audioFile',
              type: 'upload',
              relationTo: 'media',
              label: 'Audio File (MP3)',
              admin: {
                description: 'Upload the sermon audio file',
              },
            },
            {
              name: 'sermonNotes',
              type: 'upload',
              relationTo: 'media',
              label: 'Sermon Notes (PDF)',
              admin: {
                description: 'Upload the sermon notes PDF',
              },
            },
            {
              name: 'transcript',
              type: 'upload',
              relationTo: 'media',
              label: 'Transcript',
              admin: {
                description: 'Upload the sermon transcript',
              },
            },
          ],
          label: 'Media',
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
    {
      name: 'populatedSpeaker',
      type: 'group',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'richText',
        },
      ],
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateSermon],
    afterRead: [populateSpeaker],
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
