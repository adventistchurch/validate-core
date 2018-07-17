import validate from './index'
import { defaults } from './validators/email'

test('with null', () => {
  expect(validate(null)).toBe(undefined)
})

test('with email rule', () => {
  expect(validate('test@email.com', { email: true })).toBe(undefined)
  expect(validate('test@com', { email: true })).toEqual([defaults.message])
})
