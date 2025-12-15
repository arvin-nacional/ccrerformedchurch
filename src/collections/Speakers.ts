import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { slugField } from 'payload'

export const Speakers: CollectionConfig = {
  slug: 'speakers',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Speaker Name',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title/Role',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biography',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
    },
    slugField({
      position: undefined,
    }),
  ],
}
