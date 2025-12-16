import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const RecentSermonsBlock: Block = {
  slug: 'recentSermons',
  interfaceName: 'RecentSermonsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Recent Sermons',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Description',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 12,
      label: 'Number of Sermons to Display',
    },
    {
      name: 'showButton',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show "View All Sermons" Button',
    },
  ],
  graphQL: {
    singularName: 'RecentSermonsBlock',
  },
  labels: {
    plural: 'Recent Sermons Blocks',
    singular: 'Recent Sermons Block',
  },
}
