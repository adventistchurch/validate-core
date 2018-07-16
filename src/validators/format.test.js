import format, { defaults } from './format'

import REGEXP from '../regexp'

const { message } = defaults

const customMessage = "it doesn't looks like a valid format!"

const validEmails = [
  'email@test.com',
  'email@test.com.ar',
  'user.name@t.co.be',
  '123.name@t.co.be',
  'USER.NAME@TEST.COM'
]

const invalidEmails = [
  'email.test.com',
  'email.test/com',
  'www.email.com',
  '.NAME@TEST.COM',
  '@NAME@TEST.COM'
]

// With Null
test('with null value ', () => {
  expect(() => format(null)).toThrow()
})

test('with missing options', () => {
  expect(() => format('123-456-7890')).toThrow()
  expect(() => format('email@test.com')).toThrow()
})

// with values
test('with valid values', () => {
  for (const validEmail of validEmails) {
    expect(format(validEmail, { pattern: REGEXP.EMAIL })).toBe(undefined)
    expect(
      format(validEmail, { pattern: REGEXP.EMAIL, message: customMessage })
    ).toBe(undefined)
  }
})
test('with invalid values', () => {
  for (const invalidEmail of invalidEmails) {
    expect(format(invalidEmail, { pattern: REGEXP.EMAIL })).toBe(message)
    expect(
      format(invalidEmail, { pattern: REGEXP.EMAIL, message: customMessage })
    ).toBe(customMessage)
  }
})
