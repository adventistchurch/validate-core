import { contains, formatMessage, isArray, isDefined, isString } from '../utils'

export const defaults = {
  message: '%{value} is restricted',
  within: [],
  formatMessage
}

export default (value, options) => {
  if (isArray(options)) {
    options = { within: options }
  }

  const { within, message, formatMessage } = {
    ...defaults,
    ...options
  }

  // empty values are fine
  if (!isDefined(value)) return

  if (!contains(within, value)) return

  if (isString(within[value])) {
    value = within[value]
  }

  return formatMessage(message, { value })
}
