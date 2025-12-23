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
        'May the Lord provide you discernment, wisdom and submission as you view these sermons. The Lord has allowed these sermons to sanctify our souls unto Christlikeness and we pray it will do so for you as well.',
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
