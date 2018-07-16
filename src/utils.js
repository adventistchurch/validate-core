import REGEXP from './regexp'

// If the given argument is a call: function the and: function return the value otherwise just return the value. Additional arguments will be passed as arguments to the function.
// Example:
// ```
// result('foo') // 'foo'
// result(Math.max, 1, 2) // 2
// ```
export const result = (value, ...args) =>
  isFunction(value) ? value.apply(null, args) : value

// Checks if the value is a number. This function does not consider NaN a number like many other `isNumber` functions do.
export const isNumber = value => typeof value === 'number' && !isNaN(value)

// Returns false if the object is not a function
export const isFunction = value => typeof value === 'function'

// A simple check to verify that the value is an integer. Uses `isNumber` and a simple modulo check.
export const isInteger = value => isNumber(value) && value % 1 === 0

// A simple check to verify that the value is a float. Uses `isNumber` and 'isInteger' functions
export const isFloat = value => isNumber(value) && !isInteger(value)

// Checks if the value is a boolean
export const isBoolean = value => typeof value === 'boolean'

// Uses the `Object` function to check if the given argument is an object.
export const isObject = obj => obj === Object(obj)

// Simply checks if the object is an instance of a date
export const isDate = obj => obj instanceof Date

// Returns false if the object is `null` of `undefined`
export const isDefined = obj => obj !== null && obj !== undefined

// Check if value is empty
export const isEmpty = value => {
  // Null and undefined are empty
  if (!isDefined(value)) return true

  // functions are non empty
  if (isFunction(value)) return false

  // Whitespace only strings are empty
  if (isString(value)) return REGEXP.EMPTY_STRING.test(value)

  // For arrays we use the length property
  if (isArray(value)) return value.length === 0

  // Dates have no attributes but aren't empty
  if (isDate(value)) return false

  // If we find at least one property we consider it non empty
  if (isObject(value)) {
    for (const attr in value) {
      return !attr
    }
    return true
  }

  return false
}

// Checks if value is a string
export const isString = value => typeof value === 'string'

// Check if calue is an array
export const isArray = value => ({}.toString.call(value) === '[object Array]')

// Checks if the object is a hash, which is equivalent to an object that is neither an array, a function nor a date.
export const isHash = value =>
  isObject(value) && !isArray(value) && !isFunction(value) && !isDate(value)

// checks if an object or an array contains a value
export const contains = (obj, value) => {
  if (!isDefined(obj)) return false

  if (isArray(obj)) return obj.indexOf(value) !== -1

  return value in obj
}

// Removes duplicates in an array
export const unique = array => {
  if (!isArray(array)) return array

  return array.filter((el, index, array) => array.indexOf(el) === index)
}

// Capitalizes a string
export const capitalize = str => {
  if (!isString(str)) return str

  return str[0].toUpperCase() + str.slice(1)
}

// Formats the specified strings with the given values like so:
// ```
// format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
// ```
// If you want to write %{...} without having it replaced simply prefix it with % like this `Foo: %%{foo}` and it will be returned as `"Foo: %{foo}"`
export const formatMessage = (str, vals) => {
  if (!isString(str)) return str
  return str.replace(REGEXP.FORMAT_REGEXP, (m0, m1, m2) => {
    return m1 === '%' ? `%{${m2}}` : String(vals[m2])
  })
}

// "Prettifies" the given string. Prettifying means replacing [.\_-] with spaces as well as splitting camel case words.
export const prettify = str => {
  // If there are more than 2 decimals round it to two
  if (isNumber(str))
    return (str * 100) % 1 === 0
      ? `${str}`
      : parseFloat(Math.round(str * 100) / 100).toFixed(2)

  if (isArray(str)) return str.map(s => prettify(s)).join(', ')

  if (isObject(str)) return str.toString()

  return (
    // Ensure the string is actually a string
    `${str}`
      // Splits keys separated by periods
      .replace(/([^\s])\.([^\s])/g, '$1 $2')
      // Removes backslashes
      .replace(/\\+/g, '')
      // Replaces _ and - with space
      .replace(/[_-]/g, ' ')
      // Splits camel cased words
      .replace(/([a-z])([A-Z])/g, (m0, m1, m2) => `${m1} ${m2.toLowerCase()}`)
      .toLowerCase()
  )
}
