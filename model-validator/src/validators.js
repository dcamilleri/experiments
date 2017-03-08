import validate from './validate'

export default {
  String (input) {
    return typeof input === 'string'
  },

  Number (input) {
    return typeof input === 'number'
  },

  Date (input) {
    return input instanceof Date
  },

  Array (input) {
    return Array.isArray(input)
  },

  Function (input) {
    return typeof input === 'function'
  },

  RegExp (input) {
    return input instanceof RegExp && typeof input.test === 'function'
  },

  Boolean (input) {
    return typeof input === 'boolean'
  },

  Promise (input) {
    return input instanceof Promise && typeof input.then === 'function'
  },

  Timestamp (input) {
    return this.Number(input) && new Date(input) !== 'Invalid Date'
  },

  Record (record) {
    return (input) => {
      return validate(input, record).valid
    }
  },

  ArrayOf (validator) {
    return (input) => {
      if (!this.Array(input)) {
        return false
      }
      return input.every(validator)
    }
  }
}
