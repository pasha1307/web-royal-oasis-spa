import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'teamMember', title: 'Team Member', type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'credentials', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'headshot', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'social',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'facebook', type: 'url' }
      ]
    })
  ]
})
