import {
  contains,
  capitalize,
  formatMessage,
  isArray,
  isBoolean,
  isDate,
  isDefined,
  isEmpty,
  isFunction,
  isHash,
  isInteger,
  isNumber,
  isObject,
  isString,
  prettify,
  result,
  unique
} from './utils'

import {
  arrays,
  booleans,
  dates,
  floats,
  functions,
  integers,
  nully,
  numbers,
  objects,
  strings
} from './sampleData'

const runBooleanExpected = (func = x => x, { expectedTrue, expectedFalse }) => {
  for (const value of expectedTrue) {
    expect(func(value)).toBe(true)
  }

  for (const value of expectedFalse) {
    expect(func(value)).toBe(false)
  }
}

test('with capitalize()', () => {
  expect(capitalize('capital')).toBe('Capital')
  expect(capitalize('demo')).toBe('Demo')
  expect(capitalize('test')).toBe('Test')
  expect(capitalize('a longer string')).toBe('A longer string')
})

test('with contains()', () => {
  const anArray = ['a', 'item', 1, 123, 123.456, true, false, null]

  const notInArray = ['b', 'article', 2, 234, 12.345, new Date(), undefined]

  for (const value of anArray) {
    expect(contains(anArray, value)).toBe(true)
  }

  for (const value of notInArray) {
    expect(contains(anArray, value)).toBe(false)
  }
})

test('with formatMessage()', () => {
  // invlid values
  expect(formatMessage(null)).toBe(null)
  expect(formatMessage(true)).toBe(true)

  // no interpolation (%{somethibg}) in values
  expect(formatMessage('Hello!')).toBe('Hello!')
  expect(formatMessage('Test', { value: 'works' })).toBe('Test')

  // with interpolations
  expect(formatMessage('Format %{this}', { this: 'message' })).toBe(
    'Format message'
  )
  expect(
    formatMessage('Format %{this} with %{that}!', {
      this: 'message',
      that: 'interpolations'
    })
  ).toBe('Format message with interpolations!')
})

test('with isArray()', () => {
  const expectedTrue = arrays

  const expectedFalse = [
    NaN,
    ...booleans,
    ...dates,
    ...functions,
    ...nully,
    ...numbers,
    ...objects,
    ...strings
  ]

  runBooleanExpected(isArray, { expectedTrue, expectedFalse })
})

test('with isBoolean()', () => {
  const expectedTrue = booleans

  const expectedFalse = [
    NaN,
    ...arrays,
    ...dates,
    ...functions,
    ...nully,
    ...numbers,
    ...objects,
    ...strings
  ]

  runBooleanExpected(isBoolean, { expectedTrue, expectedFalse })
})

test('with isDate()', () => {
  const expectedTrue = dates

  const expectedFalse = [
    NaN,
    ...arrays,
    ...booleans,
    ...functions,
    ...nully,
    ...numbers,
    ...objects,
    ...strings
  ]

  runBooleanExpected(isDate, { expectedTrue, expectedFalse })
})

test('with isDefined()', () => {
  const expectedTrue = [
    NaN,
    ...arrays,
    ...booleans,
    ...functions,
    ...dates,
    ...numbers,
    ...objects,
    ...strings
  ]

  const expectedFalse = nully

  runBooleanExpected(isDefined, { expectedTrue, expectedFalse })
})

test('with isEmpty()', () => {
  const expectedTrue = ['', [], {}, ...nully]

  const expectedFalse = [
    NaN,
    ...arrays,
    ...booleans,
    ...functions,
    ...dates,
    ...numbers,
    ...objects,
    ...strings
  ]

  runBooleanExpected(isEmpty, { expectedTrue, expectedFalse })
})

test('with isFunction()', () => {
  const expectedTrue = functions

  const expectedFalse = [
    NaN,
    ...arrays,
    ...booleans,
    ...dates,
    ...nully,
    ...numbers,
    ...objects,
    ...strings
  ]

  runBooleanExpected(isFunction, { expectedTrue, expectedFalse })
})

test('with isHash()', () => {
  const expectedTrue = objects

  const expectedFalse = [
    NaN,
    ...arrays,
    ...booleans,
    ...dates,
    ...functions,
    ...nully,
    ...numbers,
    ...strings
  ]

  runBooleanExpected(isHash, { expectedTrue, expectedFalse })
})

test('with isInteger()', () => {
  const expectedTrue = integers

  const expectedFalse = [
    NaN,
    ...arrays,
    ...booleans,
    ...dates,
    ...floats,
    ...functions,
    ...nully,
    ...objects,
    ...strings
  ]

  runBooleanExpected(isInteger, { expectedTrue, expectedFalse })
})

test('with isNumber()', () => {
  const expectedTrue = numbers

  const expectedFalse = [
    NaN,
    ...arrays,
    ...booleans,
    ...dates,
    ...functions,
    ...nully,
    ...objects,
    ...strings
  ]

  runBooleanExpected(isNumber, { expectedTrue, expectedFalse })
})

test('with isObject()', () => {
  const expectedTrue = [...arrays, ...dates, ...functions, ...objects]

  const expectedFalse = [NaN, ...booleans, ...nully, ...numbers, ...strings]

  runBooleanExpected(isObject, { expectedTrue, expectedFalse })
})

test('with isString()', () => {
  const expectedTrue = strings

  const expectedFalse = [
    NaN,
    ...arrays,
    ...booleans,
    ...dates,
    ...functions,
    ...nully,
    ...numbers,
    ...objects
  ]

  runBooleanExpected(isString, { expectedTrue, expectedFalse })
})

test('with prettify()', () => {
  expect(prettify(null)).toBe('null')
  expect(prettify(123)).toBe('123')
  expect(prettify(123.21)).toBe('123.21')
  expect(prettify(1234.321)).toBe('1234.32')
  expect(prettify(1234.329)).toBe('1234.33')
  expect(prettify([1, 2, 3])).toBe('1, 2, 3')
  expect(prettify(['a', 'b', 'c', 'd'])).toBe('a, b, c, d')
  expect(prettify({})).toBe('[object Object]')
  expect(prettify('a_string.with-stuff')).toBe('a string with stuff')
  expect(prettify('\\GreatScott\\!')).toBe('great scott!')
})

test('with result()', () => {
  expect(result(null)).toBe(null)
  expect(result(undefined)).toBe(undefined)
  expect(result(123)).toBe(123)
  expect(result('foo')).toBe('foo')
  expect(result(true)).toBe(true)
  expect(result(x => 'foo' + x, 'bar')).toBe('foobar')
})

test('with unique()', () => {
  expect(unique(true)).toBe(true)
  expect(unique(123)).toBe(123)
  expect(unique('a string')).toBe('a string')
  expect(unique(['a'])).toEqual(['a'])
  expect(unique(['a', 'a', 'b'])).toEqual(['a', 'b'])
  expect(unique([1, 1, 2, 2, 3])).toEqual([1, 2, 3])
  expect(unique([true, false, true, false])).toEqual([true, false])
  expect(unique(['something', 'else', 'something'])).toEqual([
    'something',
    'else'
  ])
})
