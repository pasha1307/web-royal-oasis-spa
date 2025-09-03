import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'address', type: 'string' }),
    defineField({ name: 'hours', type: 'array', of: [{ type: 'string' }]}),
    defineField({
      name: 'social',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'facebook', type: 'url' },
        { name: 'maps', type: 'url' },
      ]
    }),
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string' },
        { name: 'subhead', type: 'text' },
        { name: 'image', type: 'image', options: { hotspot: true } },
      ]
    }),
    defineField({
      name: 'seo',
      type: 'object',
      fields: [
        { name: 'defaultTitle', type: 'string' },
        { name: 'defaultDescription', type: 'text' },
        { name: 'ogImage', type: 'image', options: { hotspot: true } }
      ]
    })
  ]
})
