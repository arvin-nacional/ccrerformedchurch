import type { Block } from 'payload'

export const EventsAnnouncementsBlock: Block = {
  slug: 'eventsAnnouncements',
  interfaceName: 'EventsAnnouncementsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Events & Announcements',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'According to God’s will and purposes, may you join us in worshipping the Lord in spirit and in truth. Please stay updated as well for our upcoming events and announcements here.',
      label: 'Description',
    },
    {
      name: 'events',
      type: 'array',
      label: 'Events',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'category',
          type: 'select',
          label: 'Category',
          required: true,
          options: [
            { label: 'Weekly', value: 'weekly' },
            { label: 'Fortnightly', value: 'fortnightly' },
            { label: 'Special Event', value: 'special' },
            { label: 'Retreat', value: 'retreat' },
            { label: 'Fellowship', value: 'fellowship' },
            { label: 'Conference', value: 'conference' },
            { label: 'Upon Request', value: 'upon-request' },
          ],
          defaultValue: 'weekly',
        },
        {
          name: 'eventTitle',
          type: 'text',
          label: 'Event Title',
          required: true,
        },
        {
          name: 'eventDescription',
          type: 'textarea',
          label: 'Event Description',
        },
        {
          name: 'date',
          type: 'text',
          label: 'Date',
          required: false,
          admin: {
            description: 'e.g., "November 22, 2025" or "Every Tuesday" or "Upon Request"',
          },
        },
        {
          name: 'time',
          type: 'text',
          label: 'Time',
          required: false,
          admin: {
            description:
              'e.g., "04:00 PM to 06:00 PM" or "07:00 PM" (leave empty for Upon Request)',
          },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
          required: false,
          defaultValue: 'Main Sanctuary',
        },
        {
          name: 'linkText',
          type: 'text',
          label: 'Link Text',
          admin: {
            description: 'e.g., "Click here to make an appointment"',
          },
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL',
          admin: {
            description: 'URL for the link (e.g., contact page or external booking link)',
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Section Background Color',
      required: true,
      options: [
        { label: 'White', value: 'bg-white' },
        { label: 'Gray 50', value: 'bg-gray-50' },
        { label: 'Transparent', value: 'bg-transparent' },
      ],
      defaultValue: 'bg-white',
    },
    {
      name: 'cardBackgroundColor',
      type: 'select',
      label: 'Card Background Color',
      required: true,
      options: [
        { label: 'White', value: 'bg-white' },
        { label: 'Gray 50', value: 'bg-gray-50' },
        { label: 'Gray 100', value: 'bg-gray-100' },
      ],
      defaultValue: 'bg-white',
    },
  ],
  graphQL: {
    singularName: 'EventsAnnouncementsBlock',
  },
  labels: {
    plural: 'Events & Announcements Blocks',
    singular: 'Events & Announcements Block',
  },
}
