import datetime from './datetime'

export default (value, options) =>
  datetime(value, { ...options, dateOnly: true })
