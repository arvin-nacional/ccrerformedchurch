import React from 'react'
import RichText from '@/components/RichText'
import type { ChurchLeadershipBlock as ChurchLeadershipBlockType } from '@/payload-types'

type Props = {
  className?: string
} & ChurchLeadershipBlockType

const goldColor = '#D5B888'

export const ChurchLeadershipBlock: React.FC<Props> = ({
  className,
  title,
  introduction,
  backgroundColor,
  statements,
}) => {
  return (
    <section className={`py-16 ${backgroundColor || 'bg-white'} ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {introduction && (
            <div className="prose prose-lg max-w-none text-gray-700 mb-8 text-[18px]">
              <RichText data={introduction} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Statements */}
        {statements && statements.length > 0 && (
          <div className="space-y-6">
            {statements.map((statement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                {statement.statementCode && (
                  <strong style={{ color: goldColor }}>{statement.statementCode}</strong>
                )}{' '}
                {statement.content && (
                  <div className="prose prose-sm max-w-none text-gray-700 mb-6">
                    <RichText
                      data={statement.content}
                      enableGutter={false}
                      className="[&_a]:text-[#D5B888] [&_a:hover]:underline"
                    />
                  </div>
                )}
                {/* {statement.content && (
                  <RichText
                    data={statement.content}
                    enableGutter={false}
                    className="inline prose prose-lg max-w-none [&_p]:inline [&_a]:text-[#D5B888] [&_a:hover]:underline"
                  />
                )} */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
