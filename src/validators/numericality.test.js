import numericality, { defaults } from './numericality'
import {
  floats,
  integers,
  numbers,
  numbersAsStrings,
  strings
} from '../sampleData'

const {
  formatMessage,
  notValid,
  notNumber,
  notInteger,
  notGreaterThan,
  notGreaterThanOrEqualTo,
  notEqualTo,
  notLessThanOrEqualTo,
  notLessThan,
  notDivisibleBy,
  notEven,
  notOdd
} = defaults

// NULL values
test('with a null value', () => {
  expect(numericality(null)).toBe(undefined)
})

// Number
test('with a number', () => {
  for (const number of numbers) {
    expect(numericality(number)).toBe(undefined)
  }
})

// String (valid)
test('with a string that is a valid number', () => {
  for (const string of numbersAsStrings) {
    expect(numericality(string)).toBe(undefined)
  }
})

// String (not valid)
test('with a string that is an invalid number', () => {
  for (const string of strings) {
    expect(numericality(string)).toBe(notValid)
  }
})

test('with a string that is a number but no strings are allowed', () => {
  for (const string of numbersAsStrings) {
    expect(numericality(string, { noStrings: true })).toBe(notValid)
  }
})

// String (strict)
test('with a string that is an invalid number for strict mode', () => {
  expect(numericality('0123', { strict: true })).toBe(notNumber)
})

// Integer
test('with an integer', () => {
  for (const number of integers) {
    expect(numericality(number, { onlyInteger: true })).toBe(undefined)
  }
})

test('with a float', () => {
  for (const number of floats) {
    expect(numericality(number, { onlyInteger: true })).toBe(notInteger)
  }
})

// Greater than
test('with a number greater than a given one', () => {
  expect(numericality(5, { greaterThan: 4 })).toBe(undefined)
})

test('with a number not greater than a given one', () => {
  expect(numericality(4, { greaterThan: 5 })).toEqual([
    formatMessage(notGreaterThan, { count: 5 })
  ])
  expect(numericality(4, { greaterThan: 4 })).toEqual([
    formatMessage(notGreaterThan, { count: 4 })
  ])
})

// Greater than or equal
test('with a number greater than or equal to a given one', () => {
  expect(numericality(5, { greaterThanOrEqualTo: 4 })).toBe(undefined)
  expect(numericality(5, { greaterThanOrEqualTo: 5 })).toBe(undefined)
})

test('with a number not greater than or equal to a given one', () => {
  expect(numericality(4, { greaterThanOrEqualTo: 5 })).toEqual([
    formatMessage(notGreaterThanOrEqualTo, { count: 5 })
  ])
})

// Equal To
test('with a number equal to a given one', () => {
  expect(numericality(5, { equalTo: 5 })).toBe(undefined)
})

test('with a number not equal to a given one', () => {
  expect(numericality(4, { equalTo: 5 })).toEqual([
    formatMessage(notEqualTo, { count: 5 })
  ])
})

// Less than or equal
test('with a number smaller than or equal to a given one', () => {
  expect(numericality(5, { lessThanOrEqualTo: 6 })).toBe(undefined)
  expect(numericality(5, { lessThanOrEqualTo: 5 })).toBe(undefined)
})

test('with a number not smaller than or equal to a given one', () => {
  expect(numericality(4, { lessThanOrEqualTo: 3 })).toEqual([
    formatMessage(notLessThanOrEqualTo, { count: 3 })
  ])
})

// Less than
test('with a number smaller than a given one', () => {
  expect(numericality(5, { lessThan: 6 })).toBe(undefined)
})

test('with a number not smaller than a given one', () => {
  expect(numericality(4, { lessThan: 4 })).toEqual([
    formatMessage(notLessThan, { count: 4 })
  ])
  expect(numericality(4, { lessThan: 3 })).toEqual([
    formatMessage(notLessThan, { count: 3 })
  ])
})

// Divisible by
test('with a number divisible by a given one', () => {
  expect(numericality(6, { divisibleBy: 2 })).toBe(undefined)
})

test('with a number not divisible by a given one', () => {
  expect(numericality(6, { divisibleBy: 4 })).toEqual([
    formatMessage(notDivisibleBy, { count: 4 })
  ])
})

// Even
test('with an even number', () => {
  expect(numericality(6, { even: true })).toBe(undefined)
})

test('with an odd number', () => {
  expect(numericality(7, { even: true })).toEqual([notEven])
})

// Odd
test('with an odd number', () => {
  expect(numericality(7, { odd: true })).toBe(undefined)
})

test('with an even number', () => {
  expect(numericality(6, { odd: true })).toEqual([notOdd])
})
