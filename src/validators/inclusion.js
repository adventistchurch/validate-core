import { contains, formatMessage, isArray, isDefined } from '../utils'

export const defaults = {
  allowEmpty: false,
  message: '"%{value}" is not included in the list',
  within: [],
  formatMessage
}

export default (value, options) => {
  if (isArray(options)) {
    options = { within: options }
  }

  const { allowEmpty, message, within, formatMessage } = {
    ...defaults,
    ...options
  }

  // When empty values are fine
  if (allowEmpty && !isDefined(value)) return

  // When is contained
  if (contains(within, value)) return

  return formatMessage(message, { value })
}
