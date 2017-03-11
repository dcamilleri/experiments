// WIP

export default function flattenObject(object) {
  if (object === null || Array.isArray(object) || typeof object !== 'object') {
    throw Error(`${object} should be an object`)
  }

  return object
}