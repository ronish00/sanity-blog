import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'favorite',
      type: 'boolean',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
      initialValue: false
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})


export const hotelType = defineType({
  name: 'hotel',
  title: 'Hotel',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Hotel Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('Hotel name is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({name: 'city', title: 'City', type: 'string'}),
        defineField({name: 'country', title: 'Country', type: 'string'}),
        defineField({name: 'address', title: 'Address', type: 'string'}),
        defineField({name: 'mapLink', title: 'Google Maps Link', type: 'url'}),
      ],
    }),
    defineField({
      name: 'pricePerNight',
      title: 'Price per Night (USD)',
      type: 'number',
      validation: (Rule) => Rule.min(0).error('Price must be a positive number'),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).error('Rating should be between 1 and 5'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineField({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Hotel',
      type: 'boolean',
      description: 'Mark as featured to highlight on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'contact',
      title: 'Contact Info',
      type: 'object',
      fields: [
        defineField({name: 'phone', title: 'Phone', type: 'string'}),
        defineField({name: 'email', title: 'Email', type: 'string'}),
        defineField({name: 'website', title: 'Website', type: 'url'}),
      ],
    }),
  ],
})

