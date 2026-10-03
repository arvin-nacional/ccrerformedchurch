import type { FullStatementOfFaithBlock } from '@/payload-types'

export function numberStatements(sections: FullStatementOfFaithBlock['sections']) {
  // Payload can send an empty array as 0 or '0' during autosave. The
  // parent hook runs before nested array fields normalize those values.
  if (!Array.isArray(sections)) return sections

  let number = 0

  return sections.map((section) => ({
    ...section,
    items: Array.isArray(section.items)
      ? section.items.map((item) => ({
          ...item,
          statementNumber:
            item.itemType === 'subheading' || item.itemType === 'note' ? null : String(++number),
        }))
      : section.items,
  }))
}

/** Count statement rows before this field, within its own block. */
export function getStatementNumber(path: string, fields: Record<string, { value?: unknown }>) {
  const match = path.match(/^(.*\.sections)\.(\d+)\.items\.(\d+)\.statementNumber$/)
  if (!match) return ''

  const [, sectionsPath, sectionIndex, itemIndex] = match
  let number = 0

  for (const [fieldPath, field] of Object.entries(fields)) {
    if (!fieldPath.startsWith(`${sectionsPath}.`)) continue
    const row = fieldPath.slice(sectionsPath.length).match(/^\.(\d+)\.items\.(\d+)\.itemType$/)
    if (!row || field.value === 'subheading' || field.value === 'note') continue
    const section = Number(row[1])
    const item = Number(row[2])
    if (
      section < Number(sectionIndex) ||
      (section === Number(sectionIndex) && item <= Number(itemIndex))
    ) {
      number++
    }
  }

  return String(number)
}
