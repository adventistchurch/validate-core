import { isDefined, isString } from '../utils'

import REGEXP from '../regexp'

export const defaults = {
  message: 'is not a valid email',
  allowEmpty: false
}

export default (value, options) => {
  const { allowEmpty, message } = { ...defaults, ...options }
  const isNotDefined = !isDefined(value)

  if (allowEmpty && isNotDefined) return

  if (isNotDefined || !isString(value) || !REGEXP.EMAIL.exec(value)) {
    return message
  }
}
