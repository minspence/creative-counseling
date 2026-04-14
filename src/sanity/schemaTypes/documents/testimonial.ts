import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name / Identifier',
      type: 'string',
      description:
        'IMPORTANT: Use only pseudonyms, initials, or first names. Never use full real client names (HIPAA). e.g. "Sarah T." or "Anonymous"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: [{ type: 'service' }],
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: '1–5 stars',
      validation: (rule) => rule.min(1).max(5).integer(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'quote',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle.slice(0, 80) + (subtitle.length > 80 ? '…' : '') : '',
      }
    },
  },
})
