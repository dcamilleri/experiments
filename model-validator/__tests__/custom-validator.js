import v from '../src/validators'
import createCustomValidator from '../src/custom-validator'

jest.disableAutomock()

const longStringValidator = (input) => {
  return v.String(input) && input.length > 10
}

const shortStringValidator = (input) => {
  return v.String(input) && input.length < 10
}

describe('Testing Creating a custom validator', () => {
  it('Should create a custom validator with a name and function', () => {
    createCustomValidator('LongString', longStringValidator)

    expect(v.LongString).toBeDefined()
    expect(v.LongString).toEqual(longStringValidator)
  })

  it('Should expose a custom validator to be used', () => {
    createCustomValidator('LongString', longStringValidator)
    createCustomValidator('ShortString', shortStringValidator)

    expect(v.LongString('longlongstring')).toBeTruthy()
    expect(v.LongString('short')).toBeFalsy()

    expect(v.ShortString('longlongstring')).toBeFalsy()
    expect(v.ShortString('short')).toBeTruthy()
  })
})
