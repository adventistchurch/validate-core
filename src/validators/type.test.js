import type, { defaults } from './type'
import {
  arrays,
  booleans,
  dates,
  floats,
  functions,
  integers,
  numbers,
  objects,
  strings
} from '../sampleData'

const { formatMessage, message } = defaults
const customMessage = 'expected to be %{type}'

const validValues = {
  array: arrays,
  boolean: booleans,
  date: dates,
  float: floats,
  function: functions,
  integer: integers,
  object: objects,
  number: numbers,
  string: strings
}

const invalidValues = {
  array: [
    ...booleans,
    ...dates,
    ...floats,
    ...functions,
    ...numbers,
    ...objects,
    ...strings
  ],
  boolean: [
    ...arrays,
    ...dates,
    ...floats,
    ...functions,
    ...numbers,
    ...objects,
    ...strings
  ],
  date: [
    ...arrays,
    ...booleans,
    ...floats,
    ...functions,
    ...numbers,
    ...objects,
    ...strings
  ],
  integer: [
    ...arrays,
    ...booleans,
    ...dates,
    ...floats,
    ...functions,
    ...objects,
    ...strings
  ],
  number: [
    ...arrays,
    ...booleans,
    ...dates,
    ...functions,
    ...objects,
    ...strings
  ],
  object: [
    ...arrays,
    ...booleans,
    ...dates,
    ...floats,
    ...functions,
    ...numbers,
    ...strings
  ],
  string: [
    ...arrays,
    ...booleans,
    ...dates,
    ...floats,
    ...functions,
    ...numbers,
    ...objects
  ]
}

test('with null values or missing options', () => {
  expect(() => type(null)).toThrow()
  expect(() => type(null, { message: customMessage })).toThrow()
  expect(() => type(null, { allowEmpty: true })).toThrow()
  expect(type(null, { type: 'string', allowEmpty: true })).toBe(undefined)
  expect(type(null, { type: 'string' })).toBe(
    formatMessage(message, { type: 'string' })
  )
  expect(type(null, { type: 'string', message: customMessage })).toBe(
    formatMessage(customMessage, { type: 'string' })
  )
})

test('with values', () => {
  for (const theType of Object.keys(validValues)) {
    const values = validValues[theType]

    for (const value of values) {
      expect(type(value, { type: theType })).toBe(undefined)
      expect(type(value, { type: theType, message: customMessage })).toBe(
        undefined
      )
    }
  }

  for (const theType of Object.keys(invalidValues)) {
    const values = invalidValues[theType]

    for (const value of values) {
      expect(type(value, { type: theType })).toBe(
        formatMessage(message, { type: theType })
      )
      expect(type(value, { type: theType, message: customMessage })).toBe(
        formatMessage(customMessage, { type: theType })
      )
    }
  }
})
