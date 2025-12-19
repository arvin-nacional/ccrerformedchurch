import type { CollectionAfterReadHook } from 'payload'
import { Speaker } from 'src/payload-types'

export const populateSpeaker: CollectionAfterReadHook = async ({ doc, req, req: { payload } }) => {
  if (doc?.speaker) {
    try {
      const speakerDoc = await payload.findByID({
        id: typeof doc.speaker === 'object' ? doc.speaker?.id : doc.speaker,
        collection: 'speakers',
        depth: 0,
      })

      if (speakerDoc) {
        doc.populatedSpeaker = {
          id: speakerDoc.id,
          name: speakerDoc.name,
          title: speakerDoc.title,
          description: speakerDoc.description,
        }
      }
    } catch {
      // swallow error
    }
  }

  return doc
}
