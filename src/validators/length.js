import { formatMessage, isDefined, isNumber } from '../utils'

export const defaults = {
  allowEmpty: false,
  is: null,
  maximum: null,
  minimum: null,
  notValid: 'has an incorrect length',
  wrongLength: 'is the wrong length (should be %{is} characters)',
  tooShort: 'is too short (minimum is %{minimum} characters)',
  tooLong: 'is too long (maximum is %{maximum} characters)',
  tokenizer: value => value,
  formatMessage
}

export default (value, options) => {
  const {
    allowEmpty,
    is,
    maximum,
    message,
    minimum,
    notValid,
    tokenizer,
    tooLong,
    tooShort,
    wrongLength,
    formatMessage
  } = { ...defaults, ...options }

  const isNotDefined = !isDefined(value)

  // When empty values are allowed
  if (allowEmpty && isNotDefined) return

  const errors = []

  const length = isNotDefined ? null : tokenizer(value).length

  if (!isNumber(length)) return notValid

  // Exact (is) check
  if (isNumber(is) && length !== is) {
    errors.push(formatMessage(wrongLength, { is }))
  }

  // Minimum check
  if (isNumber(minimum) && length < minimum) {
    errors.push(formatMessage(tooShort, { minimum }))
  }

  // Maximum check
  if (isNumber(maximum) && length > maximum) {
    errors.push(formatMessage(tooLong, { maximum }))
  }

  if (errors.length > 0) return message || errors
}
