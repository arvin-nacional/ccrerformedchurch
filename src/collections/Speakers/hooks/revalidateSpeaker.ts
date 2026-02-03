import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Speaker } from '../../../payload-types'

export const revalidateSpeaker: CollectionAfterChangeHook<Speaker> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating sermons after speaker update: ${doc.name}`)

    revalidatePath('/sermons')
    revalidatePath('/sermons/[slug]', 'page')
    revalidateTag('sermons-sitemap')
  }
  return doc
}

export const revalidateDeleteSpeaker: CollectionAfterDeleteHook<Speaker> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating sermons after speaker deletion: ${doc?.name}`)

    revalidatePath('/sermons')
    revalidatePath('/sermons/[slug]', 'page')
    revalidateTag('sermons-sitemap')
  }

  return doc
}
