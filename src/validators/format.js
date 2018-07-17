import { isDefined, isString } from '../utils'

export const defaults = {
  message: 'format is invalid',
  flags: null,
  pattern: null
}

export default (value, options) => {
  if (!isDefined(options)) throw new Error('Missing format options!')

  if (isString(options) || options instanceof RegExp) {
    options = { pattern: options }
  }

  // Merge defaults and options
  const { message, flags, pattern } = {
    ...defaults,
    ...options
  }

  // empty values are allowed
  if (!isDefined(value)) return

  if (!isString(value)) return message

  const pttrn = isString(pattern) ? new RegExp(pattern, flags) : pattern

  const match = pttrn.exec(value)

  if (!match || match[0].length !== value.length) {
    return message
  }
}
