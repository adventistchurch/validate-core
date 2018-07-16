import { isDefined, isString } from '../utils'

import REGEXP from '../regexp'

export const defaults = {
  message: 'is not a valid email',
  pattern: REGEXP.EMAIL,
  allowEmpty: false
}

export default (value, options) => {
  const { allowEmpty, message, pattern } = { ...defaults, ...options }
  const isNotDefined = !isDefined(value)

  if (allowEmpty && isNotDefined) return

  if (isNotDefined || !isString(value) || !pattern.exec(value)) {
    return message
  }
}
