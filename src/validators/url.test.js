import url, { defaults } from './url'

const { message, schemes } = defaults
const customMessage = "it doesn't looks like a valid url!"

const validDomains = [
  'test.com',
  'test.com.ar',
  'www.test.com',
  'www.test.com.ar',
  'subdomain.test.com',
  'subdomain.test.com.ar',
  '1.1.1.1',
  '44.11.250.189',
  '99.99.99.99'
]

const invalidUrls = [
  123,
  123.456789,
  true,
  false,
  new Date(),
  new Date('2018-10-01'),
  'test',
  '192.168.0.1',
  "shouln't_work",
  ...validDomains
]

// with null value
test('with null value', () => {
  expect(url(null)).toBe(undefined)
})

// with values
test('with valid values for http and https schemas', () => {
  for (const scheme of schemes) {
    for (const validDomain of validDomains) {
      const validUrl = `${scheme}://${validDomain}`
      expect(url(validUrl)).toBe(undefined)
      expect(url(validUrl, { message: customMessage })).toBe(undefined)
    }
  }
})

test('with valid values for *ftp schemas', () => {
  const ftpSchemes = ['ftp', 'sftp']

  for (const scheme of ftpSchemes) {
    for (const validDomain of validDomains) {
      const validUrl = `${scheme}://${validDomain}`
      expect(url(validUrl, { schemes: ftpSchemes })).toBe(undefined)
      expect(
        url(validUrl, { schemes: ftpSchemes, message: customMessage })
      ).toBe(undefined)
    }
  }
})

test('with invalid values', () => {
  for (const invalidUrl of invalidUrls) {
    expect(url(invalidUrl)).toBe(message)
    expect(url(invalidUrl, { message: customMessage })).toBe(customMessage)
  }
})
