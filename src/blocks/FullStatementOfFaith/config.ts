import type { Block } from 'payload'

export const FullStatementOfFaithBlock: Block = {
  slug: 'fullStatementOfFaith',
  interfaceName: 'FullStatementOfFaithBlock',
  labels: {
    singular: 'Full Statement of Faith',
    plural: 'Full Statement of Faith Blocks',
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      label: 'Page Title',
      defaultValue: 'Full Statement of Faith',
      required: true,
    },
    {
      name: 'pageDescription',
      type: 'textarea',
      label: 'Page Description',
      defaultValue:
        'The complete 157 doctrinal affirmations with detailed Scripture references and theological foundations.',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Doctrine Sections',
      minRows: 1,
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Section Title (e.g. I. THE BIBLE)',
          required: true,
        },
        {
          name: 'sectionId',
          type: 'text',
          label: 'Section Anchor ID (e.g. the-bible)',
          required: true,
          admin: {
            description:
              'Used for anchor links. Use lowercase with hyphens, e.g. "the-bible", "god", "man".',
          },
        },
        {
          name: 'items',
          type: 'array',
          label: 'Statements & Sub-headings',
          fields: [
            {
              name: 'itemType',
              type: 'select',
              label: 'Item Type',
              required: true,
              defaultValue: 'statement',
              options: [
                { label: 'Statement (numbered)', value: 'statement' },
                { label: 'Sub-heading', value: 'subheading' },
                { label: 'Note (italic text)', value: 'note' },
              ],
            },
            {
              name: 'subheadingTitle',
              type: 'text',
              label: 'Sub-heading Title',
              admin: {
                condition: (_, siblingData) => siblingData?.itemType === 'subheading',
              },
            },
            {
              name: 'subheadingSize',
              type: 'select',
              label: 'Sub-heading Size',
              defaultValue: 'large',
              options: [
                {
                  label: 'Large (bold, e.g. Total Depravity, God the Father)',
                  value: 'large',
                },
                {
                  label: 'Medium (semibold, e.g. What We Teach Regarding...)',
                  value: 'medium',
                },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.itemType === 'subheading',
              },
            },
            {
              name: 'noteText',
              type: 'textarea',
              label: 'Note Text',
              admin: {
                condition: (_, siblingData) => siblingData?.itemType === 'note',
              },
            },
            {
              name: 'statementNumber',
              type: 'text',
              label: 'Statement Number (e.g. 1, 42, 103)',
              admin: {
                condition: (_, siblingData) => siblingData?.itemType === 'statement',
              },
            },
            {
              name: 'statementText',
              type: 'textarea',
              label: 'Statement Text',
              admin: {
                condition: (_, siblingData) => siblingData?.itemType === 'statement',
              },
            },
            {
              name: 'scriptureReferences',
              type: 'array',
              label: 'Scripture References',
              admin: {
                condition: (_, siblingData) => siblingData?.itemType === 'statement',
              },
              fields: [
                {
                  name: 'referenceText',
                  type: 'text',
                  label: 'Display Text (e.g. Romans 6:3–4)',
                  required: true,
                },
                {
                  name: 'queryParam',
                  type: 'text',
                  label: 'URL Query (e.g. Romans+6%3A3-4)',
                  required: true,
                  admin: {
                    description:
                      'The q= parameter for read.lsbible.org. Encode colons as %3A, spaces as +.',
                  },
                },
                {
                  name: 'separatorBefore',
                  type: 'select',
                  label: 'Separator Before This Reference',
                  defaultValue: ';',
                  options: [
                    { label: 'Semicolon (;)', value: ';' },
                    { label: 'Pipe (|)', value: '|' },
                    { label: 'Comma (,)', value: ',' },
                    { label: 'None', value: '' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'FullStatementOfFaithBlock',
  },
}
