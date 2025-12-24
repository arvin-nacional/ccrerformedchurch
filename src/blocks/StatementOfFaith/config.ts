// src/blocks/StatementOfFaith/config.ts
import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

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
    {
      type: 'collapsible',
      label: 'Call to Action Section',
      fields: [
        {
          name: 'ctaTitle',
          type: 'text',
          label: 'CTA Title',
          defaultValue: 'Want to go deeper?',
        },
        {
          name: 'ctaDescription',
          type: 'textarea',
          label: 'CTA Description',
          defaultValue:
            'The full version of our Statement of Faith includes all 157 doctrinal affirmations with detailed Scripture references and theological foundations. If you would like to explore the complete version, you may read it on the CCRC Statement of Faith Page.',
        },
        link({
          overrides: {
            name: 'ctaLink',
            label: 'CTA Button Link',
          },
        }),
        {
          name: 'ctaFooterText',
          type: 'textarea',
          label: 'CTA Footer Text',
          defaultValue:
            'We hope this summary is a helpful entry point into understanding what we believe. May it lead you to a deeper confidence in the gospel and a greater love for Christ and His Church.',
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'StatementOfFaithBlock',
  },
}
