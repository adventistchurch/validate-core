const aFunction = x => x

const nully = [null, undefined, aFunction(null), { test: true }.missing, [][0]]

const booleans = [
  true,
  false,
  'a' == 'a',
  'a' == 'b',
  1 === 1,
  1 !== 1,
  false !== false,
  aFunction(true)
]

const strings = [
  'Text',
  'abc123',
  'a spaced string!',
  '!@#$%^&*()_+=-[]',
  aFunction('oops!')
]

const numbersAsStrings = ['123', '-123', '0000123', '0.123', '12.3', '123.']

const integers = [
  0,
  1,
  12,
  123,
  1234,
  12345,
  12345 * 2,
  99999999999999999,
  -123,
  -0,
  aFunction(16777)
]

const floats = [
  0.000000000000001,
  0.1,
  0.12,
  1.234,
  4.56,
  Math.PI,
  10 / 3,
  123 / 231,
  999999999.9999999,
  -12.5,
  -0.01,
  aFunction(12.99)
]

const functions = [
  aFunction,
  function x() {
    return true
  },
  function sum(a, b) {
    return a + b
  },
  () => null,
  () => true,
  () => false,
  Math.abs,
  Object.keys
]

const numbers = [...integers, ...floats]
const arrays = [['1', 2, true]]
const objects = [
  { name: 'Name', valid: false, func: () => true, date: new Date() },
  aFunction({ object: true })
]
const dates = [new Date(), new Date('1980-12-12')]

export {
  arrays,
  booleans,
  dates,
  floats,
  functions,
  integers,
  nully,
  numbers,
  objects,
  strings,
  numbersAsStrings
}
