function isObject (input) {
  return input !== null && !Array.isArray(input) && typeof input === 'object'
}

import { ImmutMap } from '../index'

const exampleObject = {
  firstname: 'John',
  lastname: 'Doe',
  address: {
    city: 'Paris'
  }
}

describe('ImmutMap', () => {
  it('should throw if no arguments are passed to the constructor', () => {
    expect(() => new ImmutMap()).toThrow('Error: you must pass an argument')
  })

  it('(temporary) should throw if the argument passed is not an object', () => {
    const errorMessage = 'Error: you must pass an object (at least for now)'
    const createWrongImmutMap = (input) => {
      return new ImmutMap(input)
    }

    expect(() => createWrongImmutMap('hey')).toThrow(errorMessage)
    expect(() => createWrongImmutMap(12)).toThrow(errorMessage)
    expect(() => createWrongImmutMap([1, 2, 3])).toThrow(errorMessage)
    expect(() => createWrongImmutMap(() => {})).toThrow(errorMessage)
    expect(() => createWrongImmutMap({})).not.toThrow(errorMessage)
  })

  it('should return an object when creating an instance', () => {
    const immutObject = new ImmutMap(exampleObject)

    expect(isObject(immutObject)).toEqual(true)
  })

  it('should be able to retrieve a property with .get', () => {
    const immutObject = new ImmutMap(exampleObject)

    expect(immutObject.get('firstname')).toEqual(exampleObject.firstname)
    expect(immutObject.get('foo')).toEqual(undefined)
  })

  it('should not mutate the original object when doing .set', () => {
    const immutObject = new ImmutMap(exampleObject)

    immutObject.set('firstname', 'Jane')

    const newFirstname = immutObject.get('firstname')

    expect(newFirstname).not.toEqual('Jane')
    expect(newFirstname).toEqual(exampleObject.firstname)
  })

  it('should return a new Immut containing the mutation when doing .set', () => {
    const immutObject = new ImmutMap(exampleObject)

    const newImmut = immutObject.set('firstname', 'Jane')
    const newFirstname = newImmut.get('firstname')

    expect(newFirstname).toEqual('Jane')
    expect(newFirstname).not.toEqual(exampleObject.firstname)
  })
})
