import { isDefined, isString } from '../utils'

import REGEXP from '../regexp'

export const defaults = {
  message: 'is not a valid email',
  pattern: REGEXP.EMAIL
}

export default (value, options) => {
  const { message, pattern } = { ...defaults, ...options }
  const isNotDefined = !isDefined(value)

  if (isNotDefined) return

  if (isNotDefined || !isString(value) || !pattern.exec(value)) {
    return message
  }
}
