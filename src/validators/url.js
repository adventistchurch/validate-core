import { isDefined, isString } from '../utils'
import REGEXP from '../regexp'

export const defaults = {
  allowEmpty: false,
  allowLocal: false,
  message: 'is not a valid url',
  schemes: ['http', 'https']
}

// A URL validator that is used to validate URLs with the ability to
// restrict schemes and some domains.
export default (value, options) => {
  const { allowEmpty, allowLocal, message, schemes } = {
    ...defaults,
    ...options
  }

  if (allowEmpty && !isDefined(value)) return

  if (!isString(value)) return message

  if (!REGEXP.URL({ allowLocal, schemes }).exec(value)) {
    return message
  }
}
