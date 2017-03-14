import _ from 'lodash'
import flat from 'flat'
import flattenObject from '../index'

const simpleObject = {
  foo: 'bar',
  bar: [1, 2, 3]
}

const nestedObject = {
  foo: 'bar',
  bar: {
    baz: () => {
      return 'baz'
    },
    ['Internet is cool']: true
  },
  nested: {
    john: {
      doe: [4, 5, 6]
    },
    jane: 'doe'
  }
}

const nestedObjectExpected = {
  foo: 'bar',
  ['bar.baz']: function baz() {
    return 'baz'
  },
  ['bar.Internet is cool']: true,
  ['nested.john.doe']: [4, 5, 6],
  ['nested.jane']: 'doe'
}

describe('Object flattening', () => {
  it('should throw if the argument is not an object', () => {
    expect(() => flattenObject('foo')).toThrow()
    expect(() => flattenObject([])).toThrow()
    expect(() => flattenObject(null)).toThrow()
  })

  it('should return an object', () => {
    const flattenedObject = flattenObject(simpleObject)

    expect(flattenedObject).not.toBe(null)
    expect(typeof flattenedObject).toEqual('object')
    expect(Array.isArray(flattenedObject)).toBeFalsy()
  })

  it('should return an object representing all the keys and values', () => {
    const flattenedObject = flattenObject(nestedObject)

    expect(_.isEqual(flattenedObject, nestedObjectExpected)).toBeTruthy()
  })

  it('should work the same way as the `flat` npm module', () => {
    const flattenedObject = flattenObject(nestedObject)

    expect(_.isEqual(flattenedObject, flat(nestedObject))).toBeTruthy()
  })
})