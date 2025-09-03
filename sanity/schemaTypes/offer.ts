import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'offer', title: 'Offer / Promotion', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'blurb', type: 'text' }),
    defineField({ name: 'validThrough', type: 'date' }),
    defineField({ name: 'ctaLabel', type: 'string' }),
    defineField({ name: 'ctaUrl', type: 'url' })
  ]
})
