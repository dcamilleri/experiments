function isObject (input) {
	return input !== null && !Array.isArray(input) && typeof input === 'object'
}

function buildAccessorKey(prefix, key) {
	return `${prefix}.${key}`
}

export default function flattenObject(object) {
  if (!isObject(object)) {
    throw Error(`${object} should be an object`)
  }

  let result = {}

  function recursiveFlatten(obj, keyPrefix = null) {
	  const keys = Object.keys(obj)

	  for (let i = 0; i < keys.length; i++) {
	  	const keyName = keys[i]
	  	const value = obj[keyName]

	  	if (isObject(value)) {
  			recursiveFlatten(value, keyPrefix ? buildAccessorKey(keyPrefix, keyName) : keyName)
  			continue
	  	}

	  	const accessorKey = keyPrefix ? buildAccessorKey(keyPrefix, keyName) : keyName

	  	result[accessorKey] = value
	  }
  }

  recursiveFlatten(object)

  return result
}