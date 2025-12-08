import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const AboutChurchBlock: Block = {
  slug: 'aboutChurch',
  interfaceName: 'AboutChurchBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'About Our Church',
      label: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: false,
    },
    {
      name: 'launchDate',
      type: 'text',
      label: 'Launch Date',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Description',
      required: true,
    },
    {
      name: 'bibleVerse',
      type: 'text',
      label: 'Bible Verse',
      required: false,
    },
    {
      name: 'bibleReference',
      type: 'text',
      label: 'Bible Reference',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Church Image',
      required: true,
    },
  ],
  graphQL: {
    singularName: 'AboutChurchBlock',
  },
  labels: {
    plural: 'About Church Blocks',
    singular: 'About Church Block',
  },
}
