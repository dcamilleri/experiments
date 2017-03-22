import validate from '../src/validate'
import { validUserResource, badUserResource, userModel } from './fixtures/user'

jest.disableAutomock()

describe('Testing Validate method', () => {
  it('Should return true if the data validates the record', () => {
    const userValidation = validate(validUserResource, userModel)

    expect(userValidation.valid).toBeTruthy()
  })

  it('Should not return errors if validation succeeded', () => {
    const userValidation = validate(validUserResource, userModel)

    expect(userValidation.errors).toBeDefined()
    expect(userValidation.errors.length).toEqual(0)
  })

  it('Should return true if the data does not validate the record', () => {
    const userValidation = validate(badUserResource, userModel)

    expect(userValidation.valid).toBeFalsy()
  })

  it('Should return an error array if validation failed', () => {
    const userValidation = validate(badUserResource, userModel)

    expect(userValidation.errors).toBeDefined()
    expect(userValidation.errors.length).not.toEqual(0)
  })

  it('Should return error keys if validation failed', () => {
    const soonToBeBad = Object.create(validUserResource)

    soonToBeBad.firstName = 1
    soonToBeBad.isAuthenticated = 'foo'

    const userValidation = validate(soonToBeBad, userModel)

    const errorKeys = userValidation.errors.map(err => err.key)

    expect(userValidation.errors).toBeDefined()
    expect(userValidation.errors.length).toEqual(2)
    expect(errorKeys.includes('firstName')).toBeTruthy()
    expect(errorKeys.includes('isAuthenticated')).toBeTruthy()
  })
})
