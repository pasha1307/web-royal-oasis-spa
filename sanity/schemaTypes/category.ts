import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'category', title: 'Category', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'order', type: 'number' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } })
  ]
})
