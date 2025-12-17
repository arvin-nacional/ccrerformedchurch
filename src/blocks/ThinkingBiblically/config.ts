import type { Block } from 'payload'

export const ThinkingBiblicallyBlock: Block = {
  slug: 'thinkingBiblically',
  interfaceName: 'ThinkingBiblicallyBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Thinking Biblically',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue:
        'Explore articles and videos to help you think biblically about faith and life.',
      label: 'Description',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
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
  ],
  graphQL: {
    singularName: 'ThinkingBiblicallyBlock',
  },
  labels: {
    plural: 'Thinking Biblically Blocks',
    singular: 'Thinking Biblically Block',
  },
}
