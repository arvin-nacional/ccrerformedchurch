import type { Metadata } from 'next'

import type { Media, Page, Post, ThinkingBiblically, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | Partial<ThinkingBiblically> | null
}): Promise<Metadata> => {
  const { doc } = args

  let imageToUse = doc?.meta?.image

  if (!imageToUse && 'heroImage' in (doc || {})) {
    imageToUse = (doc as Partial<ThinkingBiblically>)?.heroImage
  }

  const ogImage = getImageURL(imageToUse)

  const title =
    doc?.meta?.title || (doc as any)?.title
      ? (doc?.meta?.title || (doc as any)?.title) + ' | Capitol Commons Reformed Church'
      : 'Capitol Commons Reformed Church'

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
