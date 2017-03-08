const { test, expect } = require('../utils/tester')

function extend (...objs) {
  const length = objs.length
  const isImmutable = objs[0] === true
  const firstObj = isImmutable ? objs[1] : objs[0]

  for (var i = 1; i < length; i++) {
    const currentObj = objs[i]
    const keys = Object.keys(currentObj)
    const keysLength = keys.length

    for (var j = 0; j < keysLength; j++) {
      const key = keys[j]
      firstObj[key] = currentObj[key]
    }
  }

  if (isImmutable) {
    return Object.assign({}, firstObj)
  }

  return firstObj
}

test('Test 1', () => {
  const obj = {a: 3, b: 5}
  const expected = {a: 4, b: 5, c: 8}

  const res = extend(obj, {a: 4, c: 8})

  expect(JSON.stringify(obj) === JSON.stringify(expected))
  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 2', () => {
  const obj = {a: 3, b: 5}
  const objCopy = Object.assign({}, obj)
  const expected = {a: 4, b: 5, c: 8}

  const res = extend({}, obj, {a: 4, c: 8})

  expect(JSON.stringify(obj) === JSON.stringify(objCopy))
  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 3', () => {
  const arr = [1, 2, 3]
  const obj = {a: 3, b: 5}
  const expected = {a: 3, b: 5, c: [1, 2, 3, 4]}

  const res = extend(obj, {c: arr})
  const expectedRes = {a: 3, b: 5, c: [1, 2, 3]}

  expect(JSON.stringify(res) === JSON.stringify(expectedRes))

  arr.push(4)

  expect(JSON.stringify(obj) === JSON.stringify(expected))
})

test('Test 4', () => {
  const arr = [1, 2, 3]
  const obj = {a: 3, b: 5}
  const expected = {a: 3, b: 5, c: [1, 2, 3]}

  const res = extend(true, obj, {c: arr})

  expect(JSON.stringify(res) === JSON.stringify(expected))

  arr.push(4)

  expect(JSON.stringify(obj) === JSON.stringify(expected))
})
