import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const post = defineType({
  name: 'post',
  title: 'Blog / Resource',
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'therapist' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for listing pages. Keep under 200 characters.',
      validation: (rule) => rule.max(200).warning('Keep under 200 characters.'),
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      options: {
        list: [
          { title: 'Mental Health', value: 'mental-health' },
          { title: 'Relationships', value: 'relationships' },
          { title: 'Self-Care', value: 'self-care' },
          { title: 'Grief', value: 'grief' },
          { title: 'Trauma', value: 'trauma' },
          { title: 'Youth & Adolescents', value: 'youth' },
          { title: 'Anxiety & Stress', value: 'anxiety' },
          { title: 'Art Therapy', value: 'art-therapy' },
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
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
      author: 'author.name',
      media: 'mainImage',
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `By ${author}` : '',
        media,
      }
    },
  },
})
