import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Royal Oasis Spa',

  projectId: 'i12r2ava',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// service, contentPage, post, siteSettings, offer, testimonial
// _type == 'post'
// _type == 'service'
// _type == 'contentPage'
// _type == 'siteSettings'
// _type == 'offer'
// _type == 'testimonial'
