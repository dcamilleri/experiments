import flattenObject from '../object-flatten'

function isObject (input) {
  return input !== null && !Array.isArray(input) && typeof input === 'object'
}

function mergeFlattenedObjects (flatObj1, flatObj2, prefix) {
  const keys = Object.keys(flatObj2)

  for (var i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = flatObj2[key]

    const finalKey = prefix ? `${prefix}.${key}` : key

    flatObj1[finalKey] = value
  }

  return Object.assign({}, flatObj1)
}

// Private stuff will be declared here as WeakMaps
// As private class properties are not yet part of ESCMAScript or Babel
// Proposal: https://github.com/tc39/proposal-private-fields
// Babel thread: https://github.com/babel/babel/issues/4408
const _data = new WeakMap()

export default class FlatObject {
  constructor (object, flattenOptions) {
    if (!object) {
      throw Error(`FlatObject: takes at least one argument: object:Object and options:Object`)
    }

    if (!isObject(object)) {
      throw TypeError(`${object} should be an object`)
    }

    const flattenedObject = flattenObject(object, flattenOptions)

    _data.set(this, flattenedObject)
  }

  get (key) {
    const data = _data.get(this)
    return data[key]
  }

  set (key, value) {
    let data = _data.get(this)

    if (isObject(value)) {
      data = mergeFlattenedObjects(data, flattenObject(value), key)
    } else {
      data[key] = value
    }

    _data.set(this, data)
  }

  getFlattened () {
    return _data.get(this)
  }
}
