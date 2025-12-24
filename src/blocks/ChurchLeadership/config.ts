import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ChurchLeadershipBlock: Block = {
  slug: 'churchLeadership',
  interfaceName: 'ChurchLeadershipBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Philosophy on Church Leadership',
      label: 'Section Title',
    },
    {
      name: 'introduction',
      type: 'richText',
      label: 'Introduction',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
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
      defaultValue: 'bg-white',
    },
    {
      name: 'statements',
      type: 'array',
      label: 'Leadership Statements',
      fields: [
        {
          name: 'statementCode',
          type: 'text',
          label: 'Statement Code (e.g., "MP01")',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Statement Content',
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
    singularName: 'ChurchLeadershipBlock',
  },
  labels: {
    plural: 'Church Leadership Blocks',
    singular: 'Church Leadership Block',
  },
}
