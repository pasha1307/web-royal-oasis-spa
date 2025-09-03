import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'galleryItem', title: 'Gallery Item', type: 'document',
  fields: [
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'caption', type: 'string' }),
    defineField({ name: 'service', type: 'reference', to: [{ type: 'service' }] })
  ]
})
