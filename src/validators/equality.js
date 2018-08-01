import { formatMessage, isDefined, isEmpty, isString, prettify } from '../utils'

export const defaults = {
  allowEmpty: false,
  attribute: null,
  comparator: (a, b) => a === b,
  message: 'is not equal to %{attribute}',
  formatMessage
}

export default (value, options) => {
  if (isString(options)) {
    options = { attribute: options }
  }

  const { allowEmpty, attribute, comparator, message, formatMessage } = {
    ...defaults,
    ...options
  }

  if (isEmpty(attribute)) return

  if (allowEmpty && !isDefined(value)) return

  if (!comparator(value, attribute)) {
    return formatMessage(message, {
      attribute: prettify(attribute)
    })
  }
}
