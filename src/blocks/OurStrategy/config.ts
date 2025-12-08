import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const OurStrategyBlock: Block = {
  slug: 'ourStrategy',
  interfaceName: 'OurStrategyBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our Strategy',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: true,
    },
    {
      name: 'strategyCards',
      type: 'array',
      label: 'Strategy Cards',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'Book', value: 'book' },
            { label: 'Cross', value: 'cross' },
            { label: 'Heart', value: 'heart' },
            { label: 'Star', value: 'star' },
            { label: 'Users', value: 'users' },
            { label: 'Target', value: 'target' },
            { label: 'Globe', value: 'globe' },
          ],
          defaultValue: 'book',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Card Heading',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: true,
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'OurStrategyBlock',
  },
  labels: {
    plural: 'Our Strategy Blocks',
    singular: 'Our Strategy Block',
  },
}
