import {
  capitalize,
  isDefined,
  isEmpty,
  formatMessage,
  isInteger,
  isNumber,
  isString,
  prettify
} from '../utils'

export const defaults = {
  strict: false,
  onlyInteger: false,
  odd: false,
  even: false,
  message: null,
  noStrings: false,
  notValid: 'must be a valid number',
  notNumber: 'is not a number',
  notInteger: 'must be an integer',
  notOdd: 'must be an odd number',
  notEven: 'must be an even number',
  mustBe: 'must be %{type} %{count}',
  notGreaterThan: 'must be greater than %{count}',
  notGreaterThanOrEqualTo: 'must be greater than or equal to %{count}',
  notEqualTo: 'must be equal to %{count}',
  notLessThan: 'must be less than %{count}',
  notLessThanOrEqualTo: 'must be less than or equal to %{count}',
  notDivisibleBy: 'must be divisible by %{count}',
  formatMessage
}

const checks = {
  greaterThan: (v, c) => v > c,
  greaterThanOrEqualTo: (v, c) => v >= c,
  equalTo: (v, c) => v === c,
  lessThan: (v, c) => v < c,
  lessThanOrEqualTo: (v, c) => v <= c,
  divisibleBy: (v, c) => v % c === 0
}

export default (value, options) => {
  const errors = []

  const {
    strict,
    onlyInteger,
    odd,
    even,
    formatMessage,
    message,
    mustBe,
    noStrings,
    notEven,
    notOdd,
    notInteger,
    notNumber,
    notValid
  } = { ...defaults, ...options }

  // If empty values are fine
  if (!isDefined(value)) return

  // Strict will check that it is a valid looking number
  if (isString(value) && strict) {
    const pattern = `^-?(0|[1-9]\\d*)${onlyInteger ? '' : '(\\.\\d+)?'}$`

    if (!new RegExp(pattern).test(value)) {
      return message || notNumber
    }
  }

  // Coerce the value to a number unless we're being strict.
  if (noStrings !== true && isString(value) && !isEmpty(value)) {
    value = +value
  }

  // If it's not a number we shouldn't continue since it will compare it.
  if (!isNumber(value)) return message || notValid

  if (!options) return

  // Same logic as above, sort of. Don't bother with comparisons if this
  // doesn't pass.
  if (onlyInteger && !isInteger(value)) return message || notInteger

  for (const checkName of Object.keys(checks)) {
    const count = options[checkName]
    if (isNumber(count) && !checks[checkName](value, count)) {
      // This picks the default message if specified
      // For example the greaterThan check uses the message from
      // this.notGreaterThan so we capitalize the name and prepend "not"
      const key = 'not' + capitalize(checkName)
      const msg = options[key] || mustBe

      errors.push(
        formatMessage(msg, {
          count: count,
          type: prettify(checkName)
        })
      )
    }
  }

  if (odd && value % 2 !== 1) {
    errors.push(notOdd)
  }

  if (even && value % 2 !== 0) {
    errors.push(notEven)
  }

  if (errors.length) return message || errors
}
