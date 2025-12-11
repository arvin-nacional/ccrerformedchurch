import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const GospelOfSalvationBlock: Block = {
  slug: 'gospelOfSalvation',
  interfaceName: 'GospelOfSalvationBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'The Gospel of Salvation',
      label: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: false,
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      required: true,
      options: [
        { label: 'White', value: 'bg-white' },
        { label: 'Gray 50', value: 'bg-gray-50' },
        { label: 'Transparent', value: 'bg-transparent' },
      ],
      defaultValue: 'bg-gray-50',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Gospel Sections',
      fields: [
        {
          name: 'sectionNumber',
          type: 'text',
          label: 'Section Number (e.g., "1.")',
          required: false,
        },
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Section Title',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Section Content',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: true,
        },
        {
          name: 'highlightedQuestion',
          type: 'richText',
          label: 'Highlighted Reflection Question',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: false,
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'GospelOfSalvationBlock',
  },
  labels: {
    plural: 'Gospel of Salvation Blocks',
    singular: 'Gospel of Salvation Block',
  },
}
