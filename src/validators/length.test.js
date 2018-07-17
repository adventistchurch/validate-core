import length, { defaults } from './length'

const {
  formatMessage,
  // notValid,
  tooLong,
  tooShort,
  wrongLength
} = defaults

const customNotValid = 'invalid length!'
const customWrongLength = 'Must be exactly %{is} characters!'

// NULL values
test('with a null value', () => {
  expect(length(null)).toBe(undefined)
})

test('with a null value and a custom message', () => {
  expect(length(null, { notValid: customNotValid })).toBe(undefined)
})

// Minimum
test('with a short string given a minimum', () => {
  const minimum = 5
  const message = formatMessage(tooShort, { minimum })

  expect(length('123', { minimum })).toEqual([message])
  expect(length('a', { minimum })).toEqual([message])
  expect(length('test', { minimum })).toEqual([message])
  expect(length('1', { minimum })).toEqual([message])
  expect(length('1.23', { minimum })).toEqual([message])
})

test('with a long enough string', () => {
  const minimum = 5

  expect(length('12345', { minimum })).toBe(undefined)
  expect(length('abcde', { minimum })).toBe(undefined)
  expect(length('testing', { minimum })).toBe(undefined)
  expect(length('email@test.com', { minimum })).toBe(undefined)
})

// /Maximum
test('with a long string given a maximum', () => {
  const maximum = 5
  const message = formatMessage(tooLong, { maximum })

  expect(length('123456', { maximum })).toEqual([message])
  expect(length('more than five chars', { maximum })).toEqual([message])
  expect(length('email@test.com', { maximum })).toEqual([message])
})

test('with a short enough string', () => {
  const maximum = 5

  expect(length('1', { maximum })).toBe(undefined)
  expect(length('12', { maximum })).toBe(undefined)
  expect(length('123', { maximum })).toBe(undefined)
  expect(length('1234', { maximum })).toBe(undefined)
  expect(length('12345', { maximum })).toBe(undefined)
})

// Minimum & Maximum
test('with a string within the length range', () => {
  const withinRange = { minimum: 3, maximum: 7 }

  expect(length('123', withinRange)).toBe(undefined)
  expect(length('1234', withinRange)).toBe(undefined)
  expect(length('12345', withinRange)).toBe(undefined)
  expect(length('123456', withinRange)).toBe(undefined)
  expect(length('1234567', withinRange)).toBe(undefined)
})

// Exact (is)
test('with a string of different length', () => {
  expect(length('12345', { is: 4 })).toEqual([
    formatMessage(wrongLength, { is: 4 })
  ])
})

test('with a string of different length and a custom message', () => {
  expect(length('12345', { is: 4, wrongLength: customWrongLength })).toEqual([
    formatMessage(customWrongLength, { is: 4 })
  ])
})

test('with a string of the same length', () => {
  expect(length('1234', { is: 4 })).toEqual(undefined)
  expect(length('abc', { is: 3 })).toEqual(undefined)
  expect(length('testing', { is: 7 })).toEqual(undefined)
  expect(length('a', { is: 1 })).toEqual(undefined)
})
