import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: '2lx5w0zi',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

const builder = (createImageUrlBuilder as any)(client)

export function urlFor(source: any) {
  return builder.image(source)
}