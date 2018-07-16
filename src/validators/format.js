import { isDefined, isString } from '../utils'

export const defaults = {
  message: 'format is invalid',
  allowEmpty: false,
  flags: null,
  pattern: null
}

export default (value, options) => {
  const isNotDefined = !isDefined(value)

  if (!isDefined(options)) throw new Error('Missing format options!')

  if (isString(options) || options instanceof RegExp) {
    options = { pattern: options }
  }

  // Merge defaults and options
  const { allowEmpty, message, flags, pattern } = {
    ...defaults,
    ...options
  }

  // Whern empty values are allowed
  if (allowEmpty && isNotDefined) return

  if (!isString(value)) return message

  const pttrn = isString(pattern) ? new RegExp(pattern, flags) : pattern

  const match = pttrn.exec(value)

  if (!match || match[0].length !== value.length) {
    return message
  }
}
