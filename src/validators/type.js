import {
  formatMessage,
  isArray,
  isBoolean,
  isDate,
  isDefined,
  isFloat,
  isFunction,
  isHash,
  isInteger,
  isNumber,
  isString
} from '../utils'

export const defaults = {
  allowEmpty: false,
  message: 'must be of type %{type}',
  formatMessage,
  type: null
}

export default (value, options) => {
  if (isString(options)) {
    options = { type: options }
  }

  const { allowEmpty, message, type } = { ...defaults, ...options }

  if (!isDefined(type)) throw new Error('No type was specified')

  if (allowEmpty && !isDefined(value)) return

  const types = {
    array: isArray,
    boolean: isBoolean,
    date: isDate,
    float: isFloat,
    function: isFunction,
    integer: isInteger,
    number: isNumber,
    object: value => isHash(value),
    string: isString
  }

  const check = isFunction(type) ? type : types[type]

  if (!isFunction(check)) throw new Error(`${type} must be a function.`)

  if (!check(value, options)) {
    const msg = isFunction(message)
      ? message(value, options)
      : isFunction(type)
        ? 'must be of the correct type'
        : message

    return formatMessage(msg, {
      type
    })
  }
}
