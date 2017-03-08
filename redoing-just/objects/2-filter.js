const { test, expect } = require('../utils/tester')

function filter (obj, predicate) {
  let res = {}
  const keys = Object.keys(obj)
  const keysLength = keys.length

  for (let i = 0; i < keysLength; i++) {
    const key = keys[i]
    const value = obj[key]
    const predRes = predicate.call(obj, key, value)

    if (predRes) {
      res[key] = value
    }
  }

  return res
}

test('Test 1', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 3, b: 5}
  const res = filter(obj, (key, value) => value < 6)

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 2', () => {
  const obj = {a1: 3, b1: 5, a2: 9}
  const expected = {a1: 3, a2: 9}
  const res = filter(obj, (key, value) => key[0] === 'a')

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 3', () => {
  const obj = {a: 3, b: 5, c: null}
  const expected = {a: 3, b: 5}
  const res = filter(obj, (key, value) => value)

  expect(JSON.stringify(res) === JSON.stringify(expected))
})
