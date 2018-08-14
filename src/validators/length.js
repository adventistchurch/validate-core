import { formatMessage, isDefined, isNumber } from '../utils'

export const defaults = {
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

  // Empty values are allowed
  if (!isDefined(value)) return

  const errors = []

  const length = tokenizer(value).length

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
