import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'testimonial', title: 'Testimonial', type: 'document',
  fields: [
    defineField({ name: 'author', type: 'string' }),
    defineField({ name: 'quote', type: 'text' }),
    defineField({ name: 'rating', type: 'number' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'source', type: 'string' })
  ]
})
