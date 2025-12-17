import type { Block } from 'payload'

export const RecentThinkingBiblicallyBlock: Block = {
  slug: 'recentThinkingBiblically',
  interfaceName: 'RecentThinkingBiblicallyBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Recent Articles & Videos',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue:
        'Explore our latest articles and videos to help you think biblically about faith and life.',
      label: 'Description',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 12,
      label: 'Number of Items to Display',
    },
    {
      name: 'showButton',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show "View All" Button',
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
      defaultValue: 'bg-white',
    },
  ],
  graphQL: {
    singularName: 'RecentThinkingBiblicallyBlock',
  },
  labels: {
    plural: 'Recent Thinking Biblically Blocks',
    singular: 'Recent Thinking Biblically Block',
  },
}
