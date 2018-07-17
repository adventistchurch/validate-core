import validators from './validators/index'
import { isArray, isDefined, isFunction } from './utils'

// Runs the validators specified by the constraints object:
// - If validation fails, it will return an array with the errors.
// - Otherwise it will return undefined
export default (value, constraints) => {
  const results = []

  if (!isDefined(constraints)) return

  // Loops through each constraints, finds the correct validator and run it.
  for (const rule of Object.keys(constraints)) {
    const validator = validators[rule]

    if (!isFunction(validator)) throw new Error('Invalid validator!')

    const constraint = constraints[rule]
    const result = validator(value, constraint)

    if (result) {
      results.push(isArray(result) ? [...result] : result)
    }
  }

  if (results.length) return results
}
