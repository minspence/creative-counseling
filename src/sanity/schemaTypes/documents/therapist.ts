import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const therapist = defineType({
  name: 'therapist',
  title: 'Therapist',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
      description: 'e.g. LPC, NCC, LMFT',
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      description: 'e.g. she/her, they/them',
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g. Licensed Professional Counselor',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
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
      name: 'bio',
      title: 'Biography',
      type: 'portableText',
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'acceptingClients',
      title: 'Currently Accepting New Clients',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'insuranceAccepted',
      title: 'Insurance Accepted',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
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
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})
