const { test, expect } = require('../utils/tester')

function typeOf (foo) {

  if (foo === undefined) {
    return 'undefined'
  }

  if (foo === null) {
    return 'null'
  }

  if (Array.isArray(foo)) {
    return 'array'
  }

  if (typeof foo === 'boolean') {
    return 'boolean'
  }

  if (typeof foo === 'number') {
    return 'number'
  }

  if (typeof foo === 'string') {
    return 'string'
  }

  if (foo instanceof Date) {
    return 'date'
  }

  if (foo instanceof RegExp) {
    return 'regexp'
  }

  if (foo instanceof Function) {
    return 'function'
  }

  // Must be the last one ;)
  if (foo instanceof Object) {
    return 'object'
  }
}

test('1: Testing {}', () => {
  const obj = {}
  const expected = 'object'
  const type = typeOf(obj)

  expect(type === expected)
})

test('2: Testing []', () => {
  const array = []
  const expected = 'array'
  const type = typeOf(array)

  expect(type === expected)
})

test('3: Testing function(){}', () => {
  const fn = () => {}
  const expected = 'function'
  const type = typeOf(fn)

  expect(type === expected)

})

test('4: Testing RegExp', () => {
  const regExp = /a/
  const expected = 'regexp'
  const type = typeOf(regExp)

  expect(type === expected)
})

test('5: Testing Date', () => {
  const date = new Date()
  const expected = 'date'
  const type = typeOf(date)

  expect(type === expected)
})

test('6: Testing null', () => {
  const nll = null
  const expected = 'null'
  const type = typeOf(nll)

  expect(type === expected)
})

test('7: Testing undefined', () => {
  const udf = undefined
  const expected = 'undefined'
  const type = typeOf(udf)

  expect(type === expected)
})

test('8: Testing string', () => {
  const string = 'coucou'
  const expected = 'string'
  const type = typeOf(string)

  expect(type === expected)
})

test('8: Testing number', () => {
  const number = 1
  const expected = 'number'
  const type = typeOf(number)

  expect(type === expected)
})

test('8: Testing boolean', () => {
  const boolean = true
  const expected = 'boolean'
  const type = typeOf(boolean)

  expect(type === expected)
})
