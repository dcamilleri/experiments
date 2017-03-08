const { test, expect, expectThrow } = require('../utils/tester')

function values (foo) {

  if (!foo || typeof foo == 'number' || typeof foo === 'number') {
    throw new Error('should be an array or string or object')
  }

  if (typeof foo === 'string') {
    return []
  }

  if (Array.isArray(foo)) {
    return foo
  }

  return Object.keys(foo).map((key) => foo[key])
}

test('Test 1', () => {
  const obj = {a: 4, c: 8}
  const expected = [4, 8]
  const objValues = values(obj)

  expect(JSON.stringify(objValues) === JSON.stringify(expected))
})

test('Test 2', () => {
  const obj = {a: {aa: 2}, b: {bb: 4}}
  const expected = [{aa: 2}, {bb: 4}]
  const objValues = values(obj)

  expect(JSON.stringify(objValues) === JSON.stringify(expected))
})

test('Test 3', () => {
  const obj = {}
  const expected = []
  const objValues = values(obj)

  expect(JSON.stringify(objValues) === JSON.stringify(expected))
})

test('Test 4', () => {
  const array = [1, 2, 3]
  const expected = [1, 2, 3]
  const arrValues = values(array)

  expect(JSON.stringify(arrValues) === JSON.stringify(expected))
})

test('Test 5', () => {
  const fn = (a, b) => a + b
  const expected = []
  const fnValue = values(fn)

  expect(JSON.stringify(fnValue) === JSON.stringify(expected))
})

test('Test 6', () => {
  const str = String('hello')
  const expected = []
  const strValue = values(str)

  expect(JSON.stringify(strValue) === JSON.stringify(expected))
})

test('Test 7', () => {
  const str = 1

  expectThrow(values, str)
})

