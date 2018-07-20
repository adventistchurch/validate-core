import validators from './validators/index'
import { isArray, isDefined, isFunction } from './utils'

// Runs the validators specified by the constraints object:
// - If validation fails, it will return an array with the errors.
// - Otherwise it will return undefined
export default (value, constraints) => {
  const results = []

  if (!isDefined(constraints)) return

  // Loops through each constraints, finds the correct validator and run it.
  for (const constraint in constraints) {
    const validator = validators[constraint]

    if (!isFunction(validator))
      throw new Error(`Unknow validator "${validator}"`)

    const result = validator(value, constraints[constraint])

    if (result) {
      results.push(isArray(result) ? [...result] : result)
    }
  }

  if (results.length) return results
}
