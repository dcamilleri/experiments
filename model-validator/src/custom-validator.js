import v from './validators'

export default function createCustomValidator (name, validator) {
  if (!v.Function(validator) || !name) {
    return
  }
  v[name] = validator
}
