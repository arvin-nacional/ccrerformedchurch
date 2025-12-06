// src/blocks/AboutSection/config.ts
import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const AboutSectionBlock: Block = {
  slug: 'aboutSection',
  interfaceName: 'AboutSectionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'About Capitol Commons Reformed Church',
    },
    {
      name: 'content',
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
      label: 'Content',
      required: true,
    },
    {
      name: 'button',
      type: 'group',
      label: 'Call to Action Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Our Statement of Faith',
        },
        link({
          overrides: {
            name: 'link',
          },
        }),
      ],
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      label: 'Video',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo/Image (Optional)',
    },
  ],
  graphQL: {
    singularName: 'AboutSectionBlock',
  },
  labels: {
    plural: 'About Section Blocks',
    singular: 'About Section Block',
  },
}
