import equality, { defaults } from './equality'

const { formatMessage, message } = defaults

const customMessage = 'has an invalid equality compared to %{attribute}'

const testValues = [
  'test',
  'test@email.com',
  'a',
  1,
  12.345,
  ['test', 'a', 1, true],
  { name: 'test', test: true, valid: true }
]

// Empty values
test('with an empty value and/or no options', () => {
  const attribute = 'test'
  const errorMessage = formatMessage(message, { attribute })

  expect(equality(null, { attribute })).toBe(errorMessage)
  expect(equality('', { attribute })).toBe(errorMessage)

  // when no attibute, it whould throws an error
  expect(() => equality(null)).toThrow()
})

// With valid values
test('with an equal value', () => {
  for (const value of testValues) {
    expect(equality(value, { attribute: value })).toBe(undefined)
  }
})

test('comparing two empty strings', () => {
  expect(equality('', { attribute: '', allowEmpty: true })).toBe(undefined)
  expect(() => equality('', { attribute: '' })).toThrow()
})

test('with a unequal value', () => {
  const attribute = 'something else'
  const errorMessage = formatMessage(message, { attribute })

  for (const value of testValues) {
    expect(equality(value, { attribute })).toBe(errorMessage)
  }
})

test('with a unequal value and custom message', () => {
  const attribute = 'something else'

  expect(
    equality('different', {
      attribute,
      message: customMessage
    })
  ).toBe(formatMessage(customMessage, { attribute }))
})

// Custom comparator
test('with a custom comparator', () => {
  const anObject = { test: true, works: true }
  const anIdenticalObject = { test: true, works: true }
  const aSimilarObject = { works: true, test: true }

  const simpleObjectComparator = (a, b) =>
    JSON.stringify(a) === JSON.stringify(b)

  expect(
    equality(anObject, {
      attribute: anIdenticalObject,
      comparator: simpleObjectComparator
    })
  ).toBe(undefined)

  expect(
    equality(anObject, {
      attribute: aSimilarObject,
      comparator: simpleObjectComparator
    })
  ).toBe(formatMessage(message, { attribute: aSimilarObject }))
})
