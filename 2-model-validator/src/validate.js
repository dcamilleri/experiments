export default function validate (model, schema) {
  const keys = Object.keys(model)
  let errors = []

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = model[key]
    const validator = schema[key]

    if (!validator) {
      console.warn(`No validator given for ${key}`)
      continue
    }

    if (!validator(value)) {
      errors.push({
        key,
        error: `"${key}" should be a ${validator.name}. ${value} was given.`
      })
    }
  }

  return {
    valid: errors.length === 0,
    errors
  }
}
