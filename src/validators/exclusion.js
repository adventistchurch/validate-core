import { contains, formatMessage, isArray, isDefined, isString } from '../utils'

export const defaults = {
  message: '%{value} is restricted',
  allowEmpty: false,
  within: [],
  formatMessage
}

export default (value, options) => {
  if (isArray(options)) {
    options = { within: options }
  }

  const { allowEmpty, within, message, formatMessage } = {
    ...defaults,
    ...options
  }

  // When empty values are fine
  if (allowEmpty && !isDefined(value)) return

  if (!contains(within, value)) return

  if (isString(within[value])) {
    value = within[value]
  }

  return formatMessage(message, { value })
}
