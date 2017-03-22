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
      hey: {
        you: 'yolo'
      }
    }

    flatObject.set('nested.john.doe.name', newNameObject)

    expect(flatObject.get('nested.john.doe.name.foo')).toEqual(newNameObject.foo)
    expect(flatObject.get('nested.john.doe.name.hey.you')).toEqual(newNameObject.hey.you)
  })
})

describe('Flat object: getFlattened()', () => {
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

  it('should return a copy of the new flattened object after setting new values', () => {
    const flatObject = new FlatObject(testObject)
    const expected = Object.assign({}, testObjectFlattened, {
      'in.ter.net': 'hey',
      'you': 'ho',
      'a.b.c.d.e.f': 'g'
    })

    flatObject.set('in.ter.net', 'hey')
    flatObject.set('you', 'ho')
    flatObject.set('a.b.c', {
      d: {
        e: {
          f: 'g'
        }
      }
    })

    const flattenedObject = flatObject.getFlattened()

    expect(_.isEqual(flattenedObject, expected)).toBeTruthy()
  })
})

describe('Flat object: multiple instances', () => {
  it('should by able to create multiple instances of FlatObjects', () => {
    const flatObject1 = new FlatObject(testObject)
    const object2 = {
      hey: {
        you: 'whaddup'
      }
    }
    const flatObject2 = new FlatObject(object2)

    expect(_.isEqual(flatObject1.getFlattened(), testObjectFlattened)).toBeTruthy()
    expect(_.isEqual(flatObject2.getFlattened(), flattenObject(object2))).toBeTruthy()
  })
})
