// src/blocks/StatementOfFaith/config.ts
import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const StatementOfFaithBlock: Block = {
  slug: 'statementOfFaith',
  interfaceName: 'StatementOfFaithBlock',
  labels: {
    singular: 'Statement of Faith',
    plural: 'Statement of Faith Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Our Statement of Faith',
      required: true,
    },
    {
      name: 'introduction',
      type: 'richText',
      label: 'Introduction',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures]
        },
      }),
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Faith Sections',
      minRows: 1,
      fields: [
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
              return [...rootFeatures]
            },
          }),
          required: true,
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'StatementOfFaithBlock',
  },
}
