import validateData from './index'
import { defaults } from './validators/email'

test('with null', () => {
  expect(validateData(null)).toBe(undefined)
})

test('with email rule', () => {
  expect(validateData('test@email.com', { email: true })).toBe(undefined)
  expect(validateData(null, { email: true })).toEqual([defaults.message])
  expect(validateData('test@com', { email: true })).toEqual([defaults.message])
})
