import { defineArrayMember, defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Used for service cards. Keep under 200 characters.',
      validation: (rule) => rule.max(200).warning('Keep under 200 characters for card layout.'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required().warning('Alt text is required for accessibility.'),
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
    }),
    defineField({
      name: 'therapists',
      title: 'Therapists offering this service',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'therapist' }],
        }),
      ],
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'mainImage',
    },
  },
})
