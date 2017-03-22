const { test, expect } = require('../utils/tester')

function reduce (obj, predicate, acc = 0) {
  const keys = Object.keys(obj)
  const keysLength = keys.length

  for (var i = 0; i < keysLength; i++) {
    const key = keys[i]
    const value = obj[key]
    acc = predicate.call(obj, acc, key, value, i, keys)
  }

  return acc
}

test('Test 1', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {3: 'a', 5: 'b', 9: 'c'}
  const res = reduce(obj, (acc, key, value, index, keys) => {
    acc[value] = key
    return acc
  }, {})

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 2', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = 17
  const res = reduce(obj, (acc, key, value, index, keys) => {
    acc += value
    return acc
  })

  expect(JSON.stringify(res) === JSON.stringify(expected))
})
