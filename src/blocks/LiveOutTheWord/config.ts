import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const LiveOutTheWordBlock: Block = {
  slug: 'liveOutTheWord',
  interfaceName: 'LiveOutTheWordBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Live Out The Word',
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
          name: 'subtitle',
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
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Bullet Point Text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'faithInActionTitle',
      type: 'text',
      label: 'Faith in Action Title',
      defaultValue: 'Faith in Action',
      required: false,
    },
    {
      name: 'faithInActionDescription',
      type: 'richText',
      label: 'Faith in Action Description',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
    {
      name: 'threeColumns',
      type: 'array',
      label: 'Three Column Section',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Column Heading',
          required: true,
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Column Subheading',
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
    singularName: 'LiveOutTheWordBlock',
  },
  labels: {
    plural: 'Live Out The Word Blocks',
    singular: 'Live Out The Word Block',
  },
}
