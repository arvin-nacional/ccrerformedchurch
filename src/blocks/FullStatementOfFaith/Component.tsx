import React from 'react'
import type { FullStatementOfFaithBlock as FullStatementOfFaithBlockType } from '@/payload-types'

const goldColor = '#B08D57'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & FullStatementOfFaithBlockType

export const FullStatementOfFaithBlockComponent: React.FC<Props> = ({
  pageTitle,
  pageDescription,
  sections,
  className,
}) => {
  return (
    <section className={`pb-16 bg-white pt-28 ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {(pageTitle || pageDescription) && (
          <div className="text-center mb-12">
            {pageTitle && (
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
            )}
            {pageDescription && (
              <p className="text-gray-700 text-sm max-w-2xl mx-auto">{pageDescription}</p>
            )}
          </div>
        )}

        {sections && sections.length > 0 && (
          <div className="space-y-12">
            {sections.map((section, sIdx) => (
              <div
                key={sIdx}
                id={section.sectionId}
                className="px-[42px] py-[29px] shadow-xl rounded-3xl bg-white scroll-mt-32"
              >
                <h2
                  className="text-2xl font-bold mb-6 uppercase tracking-wide"
                  style={{ color: goldColor }}
                >
                  {section.sectionTitle}
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {section.items?.map((item, iIdx) => {
                    if (item.itemType === 'subheading') {
                      const isMedium = item.subheadingSize === 'medium'
                      return (
                        <h3
                          key={iIdx}
                          className={
                            isMedium ? 'text-lg font-semibold mb-3' : 'text-xl font-bold mt-8 mb-4'
                          }
                          style={{ color: goldColor }}
                        >
                          {item.subheadingTitle}
                        </h3>
                      )
                    }

                    if (item.itemType === 'note') {
                      return (
                        <p key={iIdx} className="italic text-sm mb-4">
                          {item.noteText}
                        </p>
                      )
                    }

                    return (
                      <p key={iIdx}>
                        <strong style={{ color: goldColor }}>{item.statementNumber}</strong>{' '}
                        {item.statementText}{' '}
                        {item.scriptureReferences?.map((ref, rIdx) => (
                          <React.Fragment key={rIdx}>
                            {rIdx > 0 && ref.separatorBefore ? ` ${ref.separatorBefore} ` : ''}
                            <a
                              href={`https://read.lsbible.org/?q=${ref.queryParam}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: goldColor }}
                            >
                              {ref.referenceText}
                            </a>
                          </React.Fragment>
                        ))}
                      </p>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
