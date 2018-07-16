import { isDefined, isEmpty } from '../utils'

export const defaults = {
  allowEmpty: false,
  message: "can't be blank"
}

// Presence validates that the value isn't empty
export default (value, options) => {
  const { allowEmpty, message } = { ...defaults, ...options }

  if (allowEmpty !== false ? !isDefined(value) : isEmpty(value)) {
    return message
  }
}
