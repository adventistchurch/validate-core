import validate from './validate'
import { defaults as email } from './validators/email'
import { defaults as length } from './validators/length'

test('with null', () => {
  expect(validate(null)).toBe(undefined)
})

test('with an "invalid" validator', () => {
  expect(() => validate('test@email.com', { invalid: true })).toThrow()
})

test('with email rule', () => {
  expect(validate('test@email.com', { email: true })).toBe(undefined)
  expect(validate('test@com', { email: true })).toEqual([email.message])
})

test('with two rules', () => {
  expect(validate('test@email.com', { presence: true, email: true })).toBe(
    undefined
  )
  expect(
    validate('test@com', {
      presence: true,
      email: true,
      length: { minimum: 10 }
    })
  ).toEqual([
    email.message,
    [length.formatMessage(length.tooShort, { minimum: 10 })]
  ])
})
