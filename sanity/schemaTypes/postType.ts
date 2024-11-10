import { DocumentTextIcon } from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: "title",
      validation: Rule => Rule.required().error('A title is required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required().error('A slug is required'),
      description: 'This is used to generate the URL for the post',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
        collapsible: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'tag'}})],
      validation: Rule => Rule.max(5).error('A maximum of 5 categories are allowed'),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: "publishedAt",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: "image",
          fields: [{
            type: "text",
            name: "alt",
            title: "alt",
          }]
        },
        {
          name: "code",
          title: "Code",
          type: "code",
          options: {
            withFilename: true,
            highlightedLines: true,
          }
        }
      ],
      validation: Rule => Rule.required().error('A body is required'),
    }),
    defineField({
      name: 'preview',
      type: 'text',
      title: 'preview',
      description: 'This ends up on summary pages, on Google, when shared on social media, etc.',
      validation: Rule => Rule.max(200).error('The preview should be less than 200 characters'),
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
