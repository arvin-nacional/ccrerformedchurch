import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { slugField } from 'payload'

export const SermonSeries: CollectionConfig = {
  slug: 'sermon-series',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Series Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Series Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Series Image',
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date',
    },
    slugField({
      position: undefined,
    }),
  ],
}
