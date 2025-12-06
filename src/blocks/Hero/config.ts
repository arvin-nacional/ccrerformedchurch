import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Welcome to Grace Community Church',
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
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'serviceTimes',
      type: 'group',
      label: 'Service Times',
      fields: [
        {
          name: 'day',
          type: 'text',
          defaultValue: 'Sundays',
        },
        {
          name: 'times',
          type: 'text',
          defaultValue: '9:00 AM & 11:00 AM',
        },
      ],
    },
    {
      name: 'primaryButton',
      type: 'group',
      label: 'Primary Button',
      fields: [
        link({
          overrides: {
            name: 'link',
          },
        }),
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      label: 'Secondary Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Visit Us',
        },
        link({
          overrides: {
            name: 'link',
          },
        }),
      ],
    },
  ],
  graphQL: {
    singularName: 'HeroBlock',
  },
  labels: {
    plural: 'Hero Blocks',
    singular: 'Hero Block',
  },
}
