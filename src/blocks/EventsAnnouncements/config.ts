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
        "Join us as we gather to hear the faithful preaching of God's Word — the foundation by which Christ builds His church. Stay updated on upcoming services and events as we know, live, and proclaim Christ together.",
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
            { label: 'Special Event', value: 'special' },
            { label: 'Retreat', value: 'retreat' },
            { label: 'Fellowship', value: 'fellowship' },
            { label: 'Conference', value: 'conference' },
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
          required: true,
          admin: {
            description: 'e.g., "November 22, 2025" or "Every Tuesday"',
          },
        },
        {
          name: 'time',
          type: 'text',
          label: 'Time',
          required: true,
          admin: {
            description: 'e.g., "04:00 PM to 06:00 PM" or "07:00 PM"',
          },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
          required: true,
          defaultValue: 'Main Sanctuary',
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
