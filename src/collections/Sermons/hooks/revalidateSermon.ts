import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Sermon } from '../../../payload-types'

export const revalidateSermon: CollectionAfterChangeHook<Sermon> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/sermons/${doc.slug}`

      payload.logger.info(`Revalidating sermon at path: ${path}`)

      revalidatePath(path)
      revalidateTag('sermons-sitemap')
    }

    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/sermons/${previousDoc.slug}`

      payload.logger.info(`Revalidating old sermon at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('sermons-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Sermon> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/sermons/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('sermons-sitemap')
  }

  return doc
}
