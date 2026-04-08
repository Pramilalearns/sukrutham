import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId: '2lx5w0zi',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schema.types,
  },
})
