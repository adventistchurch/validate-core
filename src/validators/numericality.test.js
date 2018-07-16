import numericality, { defaults } from './numericality'

const {
  formatMessage,
  notEven,
  notValid,
  tooLong,
  tooShort,
  wrongLength
} = defaults

const customNotValid = 'invalid numericality!'
const customMustBe = 'Must be %{type} %{count}!'

// NULL values
test('with a null value', () => {
  expect(numericality(null)).toBe(notValid)
})

// TODO: ADD TESTS FOR numericality()!
