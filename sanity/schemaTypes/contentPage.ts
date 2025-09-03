import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'contentPage', title: 'Content Page', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] })
  ]
})
