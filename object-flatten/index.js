function isObject (input) {
  return input !== null && !Array.isArray(input) && typeof input === 'object'
}

function buildAccessorKey (prefix, key) {
  return `${prefix}.${key}`
}

export default function flattenObject (object, { flattenArrays } = {}) {
  if (!isObject(object)) {
    throw Error(`${object} should be an object`)
  }

  let result = {}

  function recursiveFlatten (obj, keyPrefix = null) {
    const keys = Object.keys(obj)

    for (let i = 0; i < keys.length; i++) {
      const keyName = keys[i]
      const value = obj[keyName]
      const accessorKey = keyPrefix ? buildAccessorKey(keyPrefix, keyName) : keyName

      if (flattenArrays && Array.isArray(value)) {
        for (let j = 0; j < value.length; j++) {
          const arrayValue = value[j]
          result[`${accessorKey}.${j}`] = arrayValue
        }

        continue
      }

      if (isObject(value)) {
        recursiveFlatten(value, accessorKey)
        continue
      }

      result[accessorKey] = value
    }
  }

  recursiveFlatten(object)

  return result
}
