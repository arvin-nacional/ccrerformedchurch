import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TheologicalSchoolBlock: Block = {
  slug: 'theologicalSchool',
  interfaceName: 'TheologicalSchoolBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      defaultValue: 'Capitol Commons Theological School',
    },
    {
      name: 'subtitle',
      type: 'richText',
      label: 'Subtitle',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Main Content',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: true,
    },
  ],
  graphQL: {
    singularName: 'TheologicalSchoolBlock',
  },
  labels: {
    plural: 'Theological School Blocks',
    singular: 'Theological School Block',
  },
}
