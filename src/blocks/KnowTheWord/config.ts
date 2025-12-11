import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const KnowTheWordBlock: Block = {
  slug: 'knowTheWord',
  interfaceName: 'KnowTheWordBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Know the Word',
      label: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'richText',
      label: 'Subtitle/Description',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
    {
      name: 'ministryTitle',
      type: 'text',
      label: 'Ministry Title',
      required: true,
    },
    {
      name: 'ministrySubtitle',
      type: 'richText',
      label: 'Ministry Subtitle',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
    {
      name: 'focusAreas',
      type: 'array',
      label: 'Focus Areas',
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Focus Area Item',
          required: true,
        },
      ],
    },
    {
      name: 'purposeTitle',
      type: 'text',
      label: 'Purpose Title',
      defaultValue: 'Purpose:',
      required: false,
    },
    {
      name: 'purposeDescription',
      type: 'richText',
      label: 'Purpose Description',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'View All Courses & Events',
      required: false,
    },
    {
      name: 'buttonUrl',
      type: 'text',
      label: 'Button URL',
      required: false,
    },
    {
      name: 'additionalContent',
      type: 'richText',
      label: 'Additional Content Below',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
  ],
  graphQL: {
    singularName: 'KnowTheWordBlock',
  },
  labels: {
    plural: 'Know the Word Blocks',
    singular: 'Know the Word Block',
  },
}
