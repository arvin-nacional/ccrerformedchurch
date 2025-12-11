import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ProclaimTheWordBlock: Block = {
  slug: 'proclaimTheWord',
  interfaceName: 'ProclaimTheWordBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Proclaim The Word',
      label: 'Section Title',
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
      name: 'sectionLabel',
      type: 'text',
      label: 'Section Label (e.g., "Ministries Under this Pillar")',
      required: false,
    },
    {
      name: 'ministryCards',
      type: 'array',
      label: 'Ministry Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Ministry Title',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Ministry Description',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: false,
        },
      ],
    },
    {
      name: 'commissionTitle',
      type: 'text',
      label: 'Commission Title',
      defaultValue: 'The Great Commission in Capitol Commons',
      required: false,
    },
    {
      name: 'commissionDescription',
      type: 'richText',
      label: 'Commission Description',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
    {
      name: 'fourColumns',
      type: 'array',
      label: 'Four Column Section',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Column Heading',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Column Description',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: false,
        },
      ],
    },
    {
      name: 'bibleVerse',
      type: 'richText',
      label: 'Bible Verse',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
  ],
  graphQL: {
    singularName: 'ProclaimTheWordBlock',
  },
  labels: {
    plural: 'Proclaim The Word Blocks',
    singular: 'Proclaim The Word Block',
  },
}
