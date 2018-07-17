import datetime, { defaults } from './datetime'

const { formatMessage, notValid, tooEarly, tooLate } = defaults

const customMessage = "doesn't looks like an date/time!"
const validDate = new Date('2018-10-26')
const validDatetime = new Date('2018-10-26 12:34:56')
const invalidDate = 'today'
const earlyDate = new Date('2018-10-25')
const lateDate = new Date('2018-10-27')

// With null value
test('with a null value', () => {
  expect(datetime(null)).toBe(undefined)
})

test('with a null value and a custom message', () => {
  expect(datetime(null, { message: customMessage })).toBe(undefined)
})

// With a valid date (date only)
test('with a valid date', () => {
  expect(datetime(validDate, { dateOnly: true })).toBe(undefined)
})

// With a valid datetime
test('with a valid datetime', () => {
  expect(datetime(validDatetime)).toBe(undefined)
})

// With an invalid date
test('with a valid date', () => {
  expect(datetime(invalidDate)).toBe(
    formatMessage(notValid, { date: invalidDate })
  )
})

// Ranges
test('with a limit earlier date', () => {
  expect(datetime(validDate, { earlierThan: lateDate })).toEqual([
    formatMessage(tooEarly, { date: lateDate })
  ])
})

test('with a limit late date', () => {
  expect(datetime(validDate, { laterThan: earlyDate })).toEqual([
    formatMessage(tooLate, { date: earlyDate })
  ])
})

test('with a valid date within the range', () => {
  expect(
    datetime(validDate, {
      earlierThan: earlyDate,
      laterThan: lateDate
    })
  ).toBe(undefined)
})
