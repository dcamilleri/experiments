const { test, expect } = require('../utils/tester')

function map (obj, predicate) {
  let res = {}
  const keys = Object.keys(obj)
  const keysLength = keys.length

  for (var i = 0; i < keysLength; i++) {
    const key = keys[i]
    const value = obj[key]

    res[key] = predicate.call(obj, key, value)
  }

  return res
}

test('Test 1', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 4, b: 6, c: 10}
  const res = map(obj, (key, value) => value + 1)

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 2', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 'a', b: 'b', c: 'c'}
  const res = map(obj, (key, value) => key)

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 3', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 'a3', b: 'b5', c: 'c9'}
  const res = map(obj, (key, value) => key + value)

  expect(JSON.stringify(res) === JSON.stringify(expected))
})
