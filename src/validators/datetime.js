import { formatMessage, isDefined, unique } from '../utils'

export const defaults = {
  earlierThan: null,
  laterThan: null,
  dateOnly: false,
  message: null,
  notValid: 'must be a valid date (${value})',
  dateOnlyMessage: 'must be a date only (${value})',
  tooEarly: 'must be no earlier than %{date}',
  tooLate: 'must be no later than %{date}',
  formatMessage
}

export default (value, options) => {
  const {
    earlierThan,
    laterThan,
    dateOnly,
    dateOnlyMessage,
    message,
    notValid,
    tooEarly,
    tooLate,
    formatMessage
  } = {
    ...defaults,
    ...options
  }

  const istNotDefined = !isDefined(value)

  // Empty values are fine
  if (istNotDefined) return

  const errors = []

  // 86400000 is the number of milliseconds in a day, this is used to remove the time from the date
  if (istNotDefined || isNaN(value) || (dateOnly && value % 86400000 !== 0))
    return formatMessage(message || (dateOnly ? dateOnlyMessage : notValid), {
      date: value
    })

  if (isDefined(earlierThan) && !isNaN(earlierThan) && value < earlierThan) {
    errors.push(formatMessage(message || tooEarly, { date: earlierThan }))
  }

  if (isDefined(laterThan) && !isNaN(laterThan) && value > laterThan) {
    errors.push(formatMessage(message || tooLate, { date: laterThan }))
  }

  if (errors.length) return unique(errors)
}
