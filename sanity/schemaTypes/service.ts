import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'service', title: 'Service', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'duration', type: 'number', description: 'Minutes' }),
    defineField({ name: 'priceText', type: 'string', description: 'e.g. "$90" or "$90–$120"' }),
    defineField({ name: 'category', type: 'reference', to: [{ type: 'category' }] }),
    defineField({ name: 'order', type: 'number' }),
    defineField({
      name: 'faqs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'q', type: 'string', title: 'Question' },
          { name: 'a', type: 'text', title: 'Answer' }
        ]
      }]
    })
  ]
})
