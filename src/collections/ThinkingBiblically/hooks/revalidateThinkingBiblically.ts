import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { ThinkingBiblically } from '../../../payload-types'

export const revalidateThinkingBiblically: CollectionAfterChangeHook<ThinkingBiblically> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/thinking-biblically/${doc.slug}`

      payload.logger.info(`Revalidating thinking biblically at path: ${path}`)

      revalidatePath(path)
      revalidateTag('thinking-biblically-sitemap')
    }

    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/thinking-biblically/${previousDoc.slug}`

      payload.logger.info(`Revalidating old thinking biblically at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('thinking-biblically-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<ThinkingBiblically> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/thinking-biblically/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('thinking-biblically-sitemap')
  }

  return doc
}
