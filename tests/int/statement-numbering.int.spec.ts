import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import type { FullStatementOfFaithBlock } from '@/payload-types'
import { FullStatementOfFaithBlockComponent } from '@/blocks/FullStatementOfFaith/Component'
import {
  getStatementNumber,
  numberStatements,
} from '@/blocks/FullStatementOfFaith/numberStatements'

type Sections = NonNullable<FullStatementOfFaithBlock['sections']>
const fixture = (): Sections => [
  {
    sectionTitle: 'First',
    sectionId: 'first',
    items: [
      { itemType: 'statement', statementText: 'Alpha', statementNumber: '42' },
      { itemType: 'subheading', subheadingTitle: 'Heading' },
      { itemType: 'statement', statementText: 'Beta', statementNumber: '99' },
    ],
  },
  { sectionTitle: 'Empty', sectionId: 'empty', items: [] },
  {
    sectionTitle: 'Last',
    sectionId: 'last',
    items: [
      { itemType: 'note', noteText: 'Note' },
      { itemType: 'statement', statementText: 'Gamma', statementNumber: '157' },
    ],
  },
]
const numbers = (sections: Sections) =>
  numberStatements(sections)
    ?.flatMap((s) => s.items ?? [])
    .filter((i) => i.itemType === 'statement')
    .map((i) => i.statementNumber)
const formFields = (sections: Sections) =>
  Object.fromEntries(
    sections.flatMap((s, si) =>
      (s.items ?? []).map((item, ii) => [
        `layout.0.sections.${si}.items.${ii}.itemType`,
        { value: item.itemType },
      ]),
    ),
  )

describe('Full Statement of Faith numbering', () => {
  it('numbers across sections, skips notes and headings, and leaves source data unchanged', () => {
    const sections = fixture()
    expect(numbers(sections)).toEqual(['1', '2', '3'])
    expect(sections[0].items?.[0].statementNumber).toBe('42')
    expect(numberStatements(null)).toBeNull()
    expect(numberStatements([])).toEqual([])
  })

  it.each([0, '0', null, undefined])(
    'preserves empty autosave array values (%s) without throwing',
    (emptyItems) => {
      const sections = fixture()
      // This is Payload's incoming request shape, before nested fields are sanitized.
      sections[0].items = emptyItems as unknown as Sections[number]['items']
      const result = numberStatements(sections)
      expect(result?.[0].items).toBe(emptyItems)
      expect(result?.[2].items?.[1].statementNumber).toBe('1')
      expect(sections[2].items?.[1].statementText).toBe('Gamma')
    },
  )

  it('renumbers later sections after deleting or inserting a statement', () => {
    const sections = fixture()
    sections[0].items?.splice(0, 1)
    expect(numbers(sections)).toEqual(['1', '2'])
    expect(
      getStatementNumber('layout.0.sections.2.items.1.statementNumber', formFields(sections)),
    ).toBe('2')
    sections[0].items?.unshift({ itemType: 'statement', statementText: 'New' })
    expect(numbers(sections)).toEqual(['1', '2', '3'])
    expect(
      getStatementNumber('layout.0.sections.2.items.1.statementNumber', formFields(sections)),
    ).toBe('3')
  })

  it('follows reordered sections and item type changes', () => {
    const sections = fixture().reverse()
    expect(numberStatements(sections)?.[0].items?.[1]).toMatchObject({
      statementText: 'Gamma',
      statementNumber: '1',
    })
    sections[0].items![1].itemType = 'note'
    expect(numbers(sections)).toEqual(['1', '2'])
    expect(
      getStatementNumber('layout.0.sections.2.items.2.statementNumber', formFields(sections)),
    ).toBe('2')
  })

  it('keeps editor counts scoped to the current block and uses numeric row ordering', () => {
    const fields = {
      ...formFields(fixture()),
      'layout.1.sections.0.items.0.itemType': { value: 'statement' },
      'layout.0.sections.10.items.0.itemType': { value: 'statement' },
    }
    expect(getStatementNumber('layout.0.sections.2.items.1.statementNumber', fields)).toBe('3')
    expect(getStatementNumber('layout.0.sections.10.items.0.statementNumber', fields)).toBe('4')
    expect(getStatementNumber('layout.1.sections.0.items.0.statementNumber', fields)).toBe('1')
  })

  it('renders current numbers for existing content and on subsequent renders', () => {
    const sections = fixture()
    const render = () => {
      const container = document.createElement('div')
      container.innerHTML = renderToStaticMarkup(
        React.createElement(FullStatementOfFaithBlockComponent, {
          blockType: 'fullStatementOfFaith',
          pageTitle: 'Faith',
          sections,
        }),
      )
      return Array.from(container.querySelectorAll('strong'), (node) => node.textContent)
    }
    expect(render()).toEqual(['1', '2', '3'])
    sections[0].items?.splice(0, 1)
    expect(render()).toEqual(['1', '2'])
  })
})
