import type { Metadata } from 'next'
import React from 'react'
import { FullStatementContent } from './FullStatementContent'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function FullStatementOfFaithPage() {
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
