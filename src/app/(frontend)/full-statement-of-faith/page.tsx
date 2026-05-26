import type { Metadata } from 'next'
import React from 'react'
import { FullStatementContent } from './FullStatementContent'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export const revalidate = 600

export default async function FullStatementOfFaithPage() {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'full-statement-of-faith' } },
    limit: 1,
    overrideAccess: false,
  })

  const page = result.docs[0]
  const hasBlocks = page?.layout && Array.isArray(page.layout) && page.layout.length > 0

  if (hasBlocks) {
    return <RenderBlocks blocks={page.layout} />
  }

  return (
    <section className="pb-16 bg-white pt-28">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Full Statement of Faith
          </h1>
          <p className="text-gray-700 text-sm max-w-2xl mx-auto">
            The complete 157 doctrinal affirmations with detailed Scripture references and
            theological foundations.
          </p>
        </div>

        <FullStatementContent />
      </div>
    </section>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Full Statement of Faith | CCRC',
    description:
      'The complete 157 doctrinal affirmations with detailed Scripture references and theological foundations.',
  }
}
