import presence, { defaults } from './presence'

const { message } = defaults
const customMessage = 'should be present!'

test('with a null value should return an error message', () => {
  expect(presence(null)).toBe(message)
})

test('with a null value, when allowing empty', () => {
  expect(presence('', { allowEmpty: true })).toBe(undefined)
})

test('with a null value, when not allowing empty', () => {
  expect(presence(null, { allowEmpty: false })).toBe(message)
})

test('with a null value with a custom message', () => {
  expect(presence(null, { message: customMessage })).toBe(customMessage)
})

test('with a null value with a custom message, when allowing empty', () => {
  expect(presence(null, { message: customMessage, allowEmpty: true })).toBe(
    customMessage
  )
})

test('with a value should return no message', () => {
  expect(presence('test')).toBe(undefined)
})

test('with a value with a custom message', () => {
  expect(presence('test', { message: customMessage })).toBe(undefined)
})
