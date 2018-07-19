import validate from './validate'
import { defaults } from './validators/email'

test('with null', () => {
  expect(validate(null)).toBe(undefined)
})

test('with an "invalid" validator', () => {
  expect(() => validate('test@email.com', { invalid: true })).toThrow()
})

test('with email rule', () => {
  expect(validate('test@email.com', { email: true })).toBe(undefined)
  expect(validate('test@com', { email: true })).toEqual([defaults.message])
})
