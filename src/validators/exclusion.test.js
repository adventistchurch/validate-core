import exclusion, { defaults } from './exclusion'

const { formatMessage, message } = defaults

const customMessage = '%{value} not included!'

const excludedItems = ['a', 'b', 3, 3.14, 'test@email.com', true]
const otherItems = ['c', 'd', 4, 3.145, 'testing@bad.com', false].filter(
  item => !excludedItems.includes(item)
) // filter prevents adding excluded items

// Empty values
test('with a null value', () => {
  expect(exclusion(null)).toBe(undefined)

  expect(exclusion(null, { message: customMessage })).toBe(undefined)
  expect(exclusion(null, { within: [null] })).toBe(undefined)
  expect(exclusion(null, { within: excludedItems })).toBe(undefined)
})

test('with a null value and excluded items', () => {
  expect(exclusion('', { within: excludedItems })).toBe(undefined)
})

test('with a null value and excluded items', () => {
  expect(exclusion('', { within: excludedItems })).toBe(undefined)
})

// Valid values
test('with a valid values', () => {
  for (const value of otherItems) {
    expect(exclusion(value, { within: excludedItems })).toBe(undefined)
  }
})

// Invalid values
test('with a invalid values', () => {
  for (const value of excludedItems) {
    expect(exclusion(value, { within: excludedItems })).toBe(
      formatMessage(message, { value })
    )
  }
})
