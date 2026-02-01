import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { WeMoveMinistry } from '../../../payload-types'

export const revalidateWeMoveMinistry: CollectionAfterChangeHook<WeMoveMinistry> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/we-move-ministry/${doc.slug}`

      payload.logger.info(`Revalidating we move ministry at path: ${path}`)

      revalidatePath(path)
      revalidateTag('we-move-ministry-sitemap')
    }

    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/we-move-ministry/${previousDoc.slug}`

      payload.logger.info(`Revalidating old we move ministry at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('we-move-ministry-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<WeMoveMinistry> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/we-move-ministry/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('we-move-ministry-sitemap')
  }

  return doc
}
