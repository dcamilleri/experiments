function isObject (input) {
  return input !== null && !Array.isArray(input) && typeof input === 'object'
}

class _mapInterface {
  constructor (object) {
    this.object = object
  }

  get (key) {
    return this.object[key]
  }

  set (key, value) {
    const newObject = Object.assign({}, this.object)
    newObject[key] = value
    return new _mapInterface(newObject)
  }
}

export function ImmutMap (object) {
  if (!object) {
    throw Error('Error: you must pass an argument')
  }

  if (!isObject(object)) {
    throw Error('Error: you must pass an object (at least for now)')
  }

  return new _mapInterface(object)
}
