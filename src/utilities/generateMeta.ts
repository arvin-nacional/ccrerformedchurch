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

  const description =
    doc?.meta?.description ||
    (doc as any)?.description?.root?.children?.[0]?.children?.[0]?.text ||
    'Capitol Commons Reformed Church (CCRC) is a Reformed-Evangelical Church situated inside the Estancia Mall at Capitol Commons, Pasig City.'

  return {
    description,
    openGraph: mergeOpenGraph({
      description,
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
