import _ from 'lodash'
import FlatObject from '../index'
import flattenObject from '../../object-flatten'

const testObject = {
  foo: 'bar',
  bar: 'yay',
  nested: {
    john: {
      doe: {
        name: 'John Doe'
      }
    },
    jane: 'doe'
  }
}

const testObjectFlattened = flattenObject(testObject)

describe('Flat object: parameters handling', () => {
  it('should throw if no arguments are passed to the function', () => {
    expect(() => new FlatObject()).toThrow()
  })

  it('should throw if the argument is not an object', () => {
    expect(() => new FlatObject('hey')).toThrow()
  })

  it('should be able to retrieve the flattened object via getFlattened', () => {
    const flatObject = new FlatObject(testObject)

    const flattenedObject = flatObject.getFlattened()

    expect(_.isEqual(flattenedObject, testObjectFlattened)).toBeTruthy()
  })

  it('should return a copy of the private flattened object via getFlattened', () => {
    const flatObject = new FlatObject(testObject)
    const flattenedObject = flatObject.getFlattened()

    expect(_.isEqual(flattenedObject, testObjectFlattened)).toBeTruthy()
  })
})

describe('Flat object: get()', () => {
  it('should be able to query a deep key of the object', () => {
    const flatObject = new FlatObject(testObject)
    const johnDoeName = flatObject.get('nested.john.doe.name')

    expect(johnDoeName).toEqual(testObject.nested.john.doe.name)
  })

  it('should be able to query an unexisting deep key without throwing error', () => {
    const flatObject = new FlatObject(testObject)
    const unexistingKey = flatObject.get('inter.net.is.cool')

    expect(unexistingKey).toBeUndefined()
  })

  it('should return an immutable copy of the value', () => {
    const flatObject = new FlatObject(testObject)
    let johnDoeName = flatObject.get('nested.john.doe.name')

    johnDoeName = 'Robert'

    expect(flatObject.get('nested.john.doe.name')).not.toEqual(johnDoeName)
  })
})

describe('Flat object: set()', () => {
  it('should be able to modify a key of the object with a non-object value', () => {
    const flatObject = new FlatObject(testObject)
    const newName = 'foo bar'

    flatObject.set('nested.john.doe.name', newName)

    expect(flatObject.get('nested.john.doe.name')).toEqual(newName)
  })

  it('should be able to modify a key of the object with an object', () => {
    const flatObject = new FlatObject(testObject)
    const newNameObject = {
      foo: 'bar',
      hey: 'you'
    }

    flatObject.set('nested.john.doe.name', newNameObject)

    expect(flatObject.get('nested.john.doe.name.foo')).toEqual('bar')
  })
})
