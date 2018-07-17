import format, { defaults } from './format'

import REGEXP from '../regexp'

const { message } = defaults

const customMessage = "it doesn't looks like a valid format!"

// With Null
test('with null value ', () => {
  expect(() => format(null)).toThrow()
})

test('with missing options', () => {
  expect(() => format('123-456-7890')).toThrow()
  expect(() => format('email@test.com')).toThrow()
})

// with values

test('with valid phones', () => {
  const validUSPhones = [
    '(111) 222-3333',
    '(111)222-3333',
    '1112223333',
    '111-222-3333',
    '555-123-4567'
  ]

  for (const validPhone of validUSPhones) {
    expect(format(validPhone, { pattern: REGEXP.PHONE_US })).toBe(undefined)
  }
})

test('with invalid phones', () => {
  const invalidUSPhones = [
    '(1111) 2222-3333',
    '11122233333',
    '1111-222-3333',
    '555-1243-456'
  ]

  for (const invalidPhone of invalidUSPhones) {
    expect(format(invalidPhone, { pattern: REGEXP.PHONE_US })).toBe(message)
  }
})

test('with valid emails', () => {
  const validEmails = [
    'email@test.com',
    'email@test.com.ar',
    'user.name@t.co.be',
    '123.name@t.co.be',
    'USER.NAME@TEST.COM'
  ]

  for (const validEmail of validEmails) {
    expect(format(validEmail, { pattern: REGEXP.EMAIL })).toBe(undefined)
    expect(
      format(validEmail, { pattern: REGEXP.EMAIL, message: customMessage })
    ).toBe(undefined)
  }
})

test('with invalid values', () => {
  const invalidEmails = [
    'email.test.com',
    'email.test/com',
    'www.email.com',
    '.NAME@TEST.COM',
    '@NAME@TEST.COM'
  ]

  for (const invalidEmail of invalidEmails) {
    expect(format(invalidEmail, { pattern: REGEXP.EMAIL })).toBe(message)
    expect(
      format(invalidEmail, { pattern: REGEXP.EMAIL, message: customMessage })
    ).toBe(customMessage)
  }
})
