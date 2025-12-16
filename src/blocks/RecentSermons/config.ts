import type { Block } from 'payload'

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
      type: 'text',
      defaultValue:
        'Catch up on recent messages or revisit your favorites. All sermons are available to watch anytime.',
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
