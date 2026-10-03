'use client'

import React from 'react'
import { TextInput, useField, useFormFields } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'

import { getStatementNumber } from './numberStatements'

export const StatementNumberField: TextFieldClientComponent = ({ path: fieldPath }) => {
  const { path } = useField<string>({ potentiallyStalePath: fieldPath })
  const number = useFormFields(([fields]) => getStatementNumber(path, fields))

  return <TextInput label="Statement Number (automatic)" path={path} readOnly value={number} />
}
