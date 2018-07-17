import inclusion, { defaults } from './inclusion'

const { formatMessage, message } = defaults

const customMessage = '%{value} not included!'

const includedItems = ['a', 'b', 3, 3.14, 'test@email.com', true]
const excludedItems = ['c', 'd', 4, 3.145, 'testing@bad.com', false].filter(
  item => !includedItems.includes(item)
) // filter prevents adding "good" items

// Null
test('with a null value', () => {
  expect(inclusion(null)).toBe(undefined)
  expect(inclusion(null, { message: customMessage })).toBe(undefined)
})

test('with a valid values', () => {
  for (const value of includedItems) {
    expect(inclusion(value, { within: includedItems })).toBe(undefined)
  }
})

test('with a invalid values', () => {
  for (const value of excludedItems) {
    expect(inclusion(value, { within: includedItems })).toBe(
      formatMessage(message, { value })
    )
  }
})
