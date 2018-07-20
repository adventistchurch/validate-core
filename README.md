# validate-core

A set of data validation utilities.

## Features

- Single data validation: check validity in an atomic way.
- Validate against a set of constraints.
- Available [validators](#validators):

  - [`date`](#date)
  - [`datetime`](#datetime)
  - [`email`](#email)
  - [`equality`](#equality)
  - [`exclusion`](#exclusion)
  - [`format`](#format)
  - [`inclusion`](#inclusion)
  - [`length`](#length)
  - [`numericality`](#numericality)
  - [`presence`](#presence)
  - [`type`](#type)
  - [`url`](#url)

## Yet another validation library? Why?

This library is based on the robust [`validate.js`](https://validatejs.org). Even when `validate.js` will work just fine in most scenarios, sometimes you just need its core or part of it:

- **ES6 Modules**: call specific modules in your project, only what you need.
- **No legacy code**: don't care about jQuery and old stuff.

## Install

```bash
yarn add validate-core
```

or

```bash
npm install validate-core
```

## Basic Usage

Examples:

```js
import validate from 'validate-core'

validate('email@test.com', { email: true, presence: true })
// => undefined

validate('email@test', { email: true, presence: true })
// => ["is not a valid email"]

validate('', { email: true, presence: true })
// => ["can't be blank"]
```

### Using a specific validator

It's possible to `import` calling a specific validator module.

Synatax:

```js
import <validatorName> from 'validate-core/validators/<validatorName>'
```

Examples:

```js
import presence from 'validate-core/validators/presence'

presence('something') // => undefined
presence('') // => ["can't be blank"]
```

```js
import date from 'validate-core/validators/email'

email('email@test.com') // => undefined
email('email@test') // => ["is not a valid email"]
```

## API

### General concepts

### The `validate()` function

The library `default export` is a function that accepts a `value` as first parameter (the one you want to validate), and an object with a set of [constraints](#constraints) as the second one:

Syntax:

```js
import validate from 'validate-core'

validate(value, { ...constraints })
```

Example:

```js
import validate from 'validate-core'

validate('email@test.com', {
  email: true,
  presence: true
})
// => undefined
```

#### Constraints and options

The [`validate()` function](#the-validate-function) accepts as second parameter an `object` with the _constraints_ (or _rules_) the value should match. This `object` should have the following syntax:

```js
{
  validatorX:  { ...optionsForValidatorX },
  validatorY:  { ...optionsForValidatorY },
  /// ...
}
```

Some validators have _"shortcuts"_ that override the constraints `object` with a single value.

Example with the [`format`](#format) validator:

```js
// With a constraint object
validate('myusername', {
  format: {
    pattern: /^@?(\w){1,15}$/,
    message: 'is not a valid Twitter account'
  }
})
// => ["is not a valid Twitter account"]

// With a shortcut
validate('myusername', {
  format: /^@?(\w){1,15}$/
})
// => ["format is invalid"]
```

> Note that in the shortcut version you cannot customize the error message.

#### Return values

[`validate()`](#the-validate-function) will return:

- `undefined` when there is no error.
- an `array` with one or more strings that explain what failed.

Individual [validators](#validators) will return almost the same output, except in some cases when they can return a `string` instead.

### Custom `formatMessage` function

Some validators support providing a custom string formatter function using the `formatMessage` option.

The validators that support this are: [`datetime`](#datetime), [`equality`](#equality), [`exclusion`](#exclusion), [`inclusion`](#inclusion), [`length`](#length), [`numericality`](#numericality) and [`type`](#type).

The function has two parameters:

- a `message`, with placeholders to replace.
- an `object` with `replacers`: keys used to replace the placeholders with their values.

> **NOTE**: `formatMessage` requires a custom `message` in the options.

Example for a custom message formatter for [`length()`](#length):

```js
import validate from 'validate-core'

// Using hashes for placeholders
const myCustomMesage = 'length is not exactly #is#'

// Note: length() provides the following replacers:
// - is
// - minimum
// - maximum

const myFormatter = (message = '', replacers = {}) => {
  return message.replace(/#(\w+)#/g, (match, placeholder) => {
    // console.log({ match, placeholder })
    return replacers[placeholder] || placeholder
  })
}

validate('123456', {
  length: {
    is: 5,
    message: myCustomMesage,
    formatMessage: myFormatter
  }
})
// => ["length is not exactly 5"]
```

### Validators

- [`date`](#date)
- [`datetime`](#datetime)
- [`email`](#email)
- [`equality`](#equality)
- [`exclusion`](#exclusion)
- [`inclusion`](#inclusion)
- [`length`](#length)
- [`numericality`](#numericality)
- [`presence`](#presence)
- [`type`](#type)
- [`url`](#url)

#### `date`

The date validator is just a shorthand for the [datetime](#datetime) validator with the `dateOnly` option set to `true`.

Examples:

```js
import validate from 'validate-core'

validate(new Date('2010-10-01'), {
  date: true
})
// => undefined

validate(new Date('2010-10-01 12:34:56'), {
  date: true
})
// => ["must be a date (not a datetime)"]
```

#### `datetime`

This validator can be used to validate dates and times. Since date parsing in javascript is very poor, some additional work is required to make this work.

Before this validator can be used, the parse and format functions need to be set. The `parse` function should take the value to parse (non null but otherwise untouched) and return the unix timestamp (in milliseconds) for that date or `NaN` if it's invalid.

It's important to mention that the constraints (`laterThan`, `earlierThan`) will also be parsed using this method. These arguments will be parsed using the `parse` function, just like the `value`.

The `format` function should take a unix timestamp (in milliseconds) and format it in a user friendly way.

You can specify the follow constraints:

- `laterThan`: The date cannot be before this time.
- `earlierThan`: The date cannot be after this time.
- `dateOnly`: If `true`, only dates (not datetimes) will be allowed. Default: `false`.

You can change the messages by setting any of these settings the options for the validator:

- `notValid` (default: `must be a valid date`).
- `dateOnlyMessage`: (default: `must be a date (not a datetime)`).
- `tooEarly` (default: `must be later than %{date}`).
- `tooLate` (default: `must be earlier than %{date}`).

You can use the placeholders `%{value}` and `%{date}` in the messages.

Examples:

```js
import validate from 'validate-core'

validate(new Date('2010-10-01 12:34:56'), {
  datetime: true
})
// => undefined

validate(new Date('2010-10-01'), {
  datetime: {
    dateOnly: true
  }
})
// => undefined

validate(new Date('2010-09-15'), {
  datetime: {
    laterThan: new Date('2010-10-01'),
    tooEarly: 'choose a date after %{date}',
    earlierThan: new Date('2010-10-31'),
    tooLate: 'choose a date before %{date}'
  }
})
// => ["choose a date after 2010-10-01"]
```

#### `email`

The email validator attempts to make sure that the input is a valid email.
Validating emails is tricky business due to the complex rules of email address formatting.

For example `john.doe@gmail` is a perfectly valid email but it's most likely just the case that John has forgotten to write `.com` at the end.

`validate-core` (as is based on `validate.js`) tries to be pragmatic and allows most valid emails, but tries to catch common typos such as forgetting the [TLD](https://en.wikipedia.org/wiki/TLD).

If you want to know more about email validation the [Wikipedia article](https://en.wikipedia.org/wiki/Email_address) and the email page on [regular-expressions.info](http://www.regular-expressions.info/email.html) are good places to start.

You can customize the regexp used by setting the `pattern` option to a regexp of your choosing. Just remember that javascript regexp does substring matching.

The default message is `is not a valid email` and as usual you can override it using the `message` option.

Examples:

```js
import validate from 'validate-core'

validate('nice@email.com', { email: true })
// => undefined

validate('bad@email', { email: true })
// => ["is not a valid email"]

validate('bad@email', { email: { message: 'wrong e-mail format' } })
// => ["wrong e-mail format"]
```

#### `equality`

The equality validator can be used to verify that one attribute is always equal to another.

This is useful when having a "confirm password" input, for example.

You specify which attribute by simply passing its value as the options for the validator or by giving the option `attribute` with the value inside.

By default `===` is used to check the quality, it you need to validate more complex objects you can give a function using the `comparator` option which should be a function that accepts two arguments and returns true if they objects are equal and false if they are not.

The default message is `is not equal to %{attribute}`

Examples:

```js
import validate from 'validate-core'

validate(123, { equals: 123 })
// => undefined

validate('foo', { equals: { attribute: 'foo' } })
// => undefined

validate('foo', { equals: 'bar' })
// => ["is not equal to bar"]
```

#### `format`

The format validator will check a value against a regular expression of your choosing. The default message if the value doesn't match is `is invalid` so you'll likely want to customize it by setting `message` to something in the options.

The `pattern` option can either be a javascript regexp or string that will be passed to the RegExp constructor. If the pattern is a string and you want to specify flags, you may use the `flags` option.

Please note that the whole string must match the regexp, not just a part of the value.

Examples:

```js
import validate from 'validate-core'

validate('(123) 456-7890', {
  format: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/ // US Phone format
})
// => undefined

validate('(123) 456-7890', {
  format: {
    pattern: '^D?(d{3})D?D?(d{3})D?(d{4})$' // US Phone format
  }
})
// => undefined
```

#### `exclusion`

The exclusion validator is useful for restriction of certain values.

It checks that the given value **is not in the list** given by the `within` option.

You can specify `within` as a list or as an object (in which case the keys of the object are used).

The default message is `%{value} is restricted` and can be changed by setting the `message` option.

Examples:

```js
import validate from 'validate-core'

validate('baz', { exclusion: { within: ['foo', 'bar'] } })
// => undefined

validate('foo', { exclusion: { within: ['foo', 'bar'] } })
// => ["foo is restricted"]
```

#### `inclusion`

The inclusion validator is useful for validating input from a dropdown, for example.

It checks that the given value exists in the list given by the `within` option.

You can specify `within` as a list or as an object (in which case the keys of the object are used).

The default message is `%{value} is not included in the list` and can be changed by setting the `message` option.

Examples:

```js
import validate from 'validate-core'

validate('foo', {
  inclusion: {
    within: ['foo', 'bar']
  }
})
// => undefined

validate('baz', {
  inclusion: {
    within: ['foo', 'bar']
  }
})
// => ["foo is not included in the list"]

validate('baz', {
  inclusion: {
    within: ['foo', 'bar'],
    message: {'%{value} is not allowed'} }
})
// => ["foo is not allowed"]
```

#### `length`

The length validator will check the length of a string.

Any object with the length property can be validated, but all the default error messages refer to strings, so make sure you override them if you plan on validating arrays using this.

You may specify the following length constraints:

- `is`: The value has to have exactly this length.
- `minimum`: The value cannot be shorter than this value.
- `maximum`: The value cannot be longer than this value.

You can specify the error message using the `notValid`, `wrongLength`, `tooShort` and `tooLong` options:

- `notValid` (default: `has an incorrect length`).
- `tooLong` (default: `is too long (maximum is %{count} characters)`).
- `tooShort` (default: `is too short (minimum is %{count} characters)`).
- `wrongLength` (default: `is the wrong length (should be %{count} characters)`).

As you may have noticed you can use `%{count}` as a placeholder for the actual constraint and it will be replaced for you.

You can also use the `message` option as the message for all errors (this overrides any other custom errors).

By default the number of characters are counted (using the length property). If you want to count something else, you can specify the `tokenizer` option, which should be a function that takes a single argument (the value) and returns a value that should be used when counting.

The `tokenizer` will **not** be called with `nil` or `undefined` as an argument.

One important thing to note is that the value for the `length` property has to be a number; otherwise the message `has an incorrect length` is returned.

An error is also logged to the console, since this is considered a coding error.

Examples:

```js
import validate from 'validate-core'

validate('12345', { length: { is: 5 } })
// => undefined

validate('12345', { length: { minimum: 6 } })
// => ["is too short (minimum is 6 characters)"]

validate('12345', { length: { maximum: 4 } })
// => ["is too long (maximum is 4 characters)"]
```

#### `numericality`

The numericality validator will only allow numbers. By default strings are coerced to numbers using the `+` operator. If this is not desirable, you can set the `noStrings` option to `true` to disable this behaviour.

The following constraints can be applied:

- `strict`: Enables more strict validation of strings. Leading zeroes won't be allowed and the number cannot be malformed.
- `onlyInteger`: Real numbers won't be allowed.
- `greaterThan`: The input has to be greater than this value.
- `greaterThanOrEqualTo`: The input has to be at least this value.
- `equalTo`: The input has to be exactly this value.
- `lessThanOrEqualTo`: The input can be this value at the most
- `lessThan`: The input has to be less than this value.
- `divisibleBy`: The input has to be divisible by this value.
- `odd`: The input has to be odd.
- `even`: The input has to be even.

If you want a custom error message, you may specify it using the `message` option or by specifying one of the following messages:

- `notValid` (default: `must be a valid number`).
- `notInteger` (default: `must be an integer`).
- `notGreaterThan` (default: `must be greater than %{count}`).
- `notGreaterThanOrEqualTo` (default: `must be greater than or equal to %{count}`).
- `notEqualTo` (default: `must be equal to %{count}`).
- `notLessThan` (default: `must be less than %{count}`).
- `notLessThanOrEqualTo` (default: `must be less than or equal to %{count}`).
- `notDivisibleBy` (default: `must be divisible by %{count}`).
- `notOdd` (default: `must be odd`).
- `notEven` (default: `must be even`).

Examples:

```js
import validate from 'validate-core'

validate(123.4, {
  numericality: true
})
// => undefined

validate('-123.4', {
  numericality: true
})
// => undefined

validate(24, {
  numericality: {
    divisibleBy: 5
  }
})
// => ["must be divisible by 5"]

validate(80, {
  numericality: {
    greaterThan: 100,
    notGreaterThan: 'please enter a number greater than %{count}'
  }
})
// => ["please enter a number greater than 100"]
```

#### `presence`

The presence validator checks that the value is defined. This validator will probably be the most used one, it corresponds to HTML5's required attribute.

You can use the `message` option to customize the message. The default message is `can't be blank`.

These are the values that are considered empty:

- `null`
- `undefined`

Additionally you can set the `allowEmpty` to `true` to allow the following values:

- `{}` (empty `objects`).
- `[]` (empty `arrays`).
- `""` (empty `string`).
- `" "` (whitespace only `string`).

> Important! All other values are considered valid (including functions)!

Examples:

```js
import validate from 'validate-core'

validate('something', { presence: true })
// => undefined

validate('', { presence: true })
// => ["can't be blank"]

validate(null, { presence: true })
// => ["can't be blank"]

validate('', { presence: { allowEmpty: true } })
// => undefined

validate('', { presence: { message: 'is required' } })
// => ["is required"]
```

#### `url`

The URL validator ensures that the input is a valid URL. Validating URLs is pretty tricky, but this validator follows a gist that can be found [here](https://gist.github.com/dperini/729294).

The following options are supported:

- `message`: The message if the validator fails. Defaults to `is not a valid url`.
- `schemes`: A list of schemes to allow. If you want to support any scheme you can use a `regexp` here (for example `[".+"]`). The default value is: `["http", "https"]`.
- `allowLocal`: A `boolean` that if `true` allows local `hostnames` such as `10.0.1.1` or `localhost`. The default is `false`.

Examples:

```js
import validate from 'validate-core'

validate('https://google.com', { url: true })
// => undefined

validate('google.com', { url: true }) // missing scheme!
// => ["is not a valid url"]
```

### Utility methods

> TODO: Add Utilities API here!

## Development

### Dev mode

```bash
# yarn
yarn dev

# or npm
npm run dev
```

### Build

```bash
# yarn
yarn build

# or npm
npm run build
```

### Run Tests

Tests are written with `jest`

```bash
# yarn
yarn test
yarn test:watch # watch mode

# or npm
npm run test
npm run test:watch # watch mode
```

## Acknowledges

This project was forked initialy from Nicklas Ansman's [validate.js](https://github.com/ansman/validate.js)

## License

The MIT License (MIT)

Copyright (c) 2018 General Conference of Seventh-day Adventists

(Read more in LICENSE file)
