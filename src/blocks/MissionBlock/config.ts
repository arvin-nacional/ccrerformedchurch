// c:\Users\Arvin\Desktop\windsurf\ccrc\src\blocks\OurMission\config.ts
import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const OurMissionBlock: Block = {
  slug: 'ourMission',
  interfaceName: 'OurMissionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our Mission',
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
      name: 'missionCards',
      type: 'array',
      label: 'Mission Cards',
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
            { label: 'Heart', value: 'heart' },
            { label: 'Message', value: 'message' },
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
          name: 'bibleReference',
          type: 'text',
          label: 'Bible Reference',
          required: false,
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
          name: 'linkText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Learn more',
          required: false,
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Button Link URL',
          required: false,
        },
        {
          name: 'cardStyle',
          type: 'select',
          label: 'Card Style',
          required: true,
          options: [
            { label: 'Light (White Background)', value: 'light' },
            { label: 'Dark (Black Background)', value: 'dark' },
          ],
          defaultValue: 'light',
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'OurMissionBlock',
  },
  labels: {
    plural: 'Our Mission Blocks',
    singular: 'Our Mission Block',
  },
}
