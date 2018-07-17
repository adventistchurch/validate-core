import email, { defaults } from './email'

const { message } = defaults

const customMessage = "doesn't looks like an email!"

test('with a null value', () => {
  expect(email(null)).toBe(undefined)
  expect(email(null, { message: customMessage })).toBe(undefined)
})

test('with a valid email', () => {
  expect(email('test@company.com')).toBe(undefined)
})

test('with a valid email and a custom message', () => {
  expect(email('test@company.com', { message: customMessage })).toBe(undefined)
})

test('with an invalid email', () => {
  expect(email('test@company@com')).toBe(message)
})

test('with an invalid email and a custom message', () => {
  expect(email('test@company', { message: customMessage })).toBe(customMessage)
})
