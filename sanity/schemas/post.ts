import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'categoryRef',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Select a category for this post.',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g., "5 MIN READ"',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary for the blog listing and SEO.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { 
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'link',
              type: 'url',
              title: 'Clickable Link',
              description: 'Optional: Add a link to this image.',
              options: { isHighlighted: true }
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility.',
              options: { isHighlighted: true }
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: { isHighlighted: true }
            }
          ]
        }
      ],
    }),
    // SEO Fields
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Optional. Recommended maximum length 60 characters. By default it uses the post title.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      description: 'Maximum length 160 characters. Will be used in search engines.',
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'string',
      group: 'seo',
      description: 'Comma separated list of keywords. E.g. "kerala, farmstay, tourism"',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
    },
    prepare(selection: any) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
