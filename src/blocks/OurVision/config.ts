import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const OurVisionBlock: Block = {
  slug: 'ourVision',
  interfaceName: 'OurVisionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our Vision',
      label: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      required: false,
    },
    {
      name: 'visionCards',
      type: 'array',
      label: 'Vision Cards',
      minRows: 1,
      maxRows: 3,
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
        {
          name: 'bibleReference',
          type: 'text',
          label: 'Bible Reference',
          required: false,
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'OurVisionBlock',
  },
  labels: {
    plural: 'Our Vision Blocks',
    singular: 'Our Vision Block',
  },
}
