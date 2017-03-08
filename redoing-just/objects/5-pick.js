const { test, expect } = require('../utils/tester')

function pick (obj, ...args) {
  let res = {}
  const argsLength = args.length

  for (var i = 0; i < argsLength; i++) {
    const arg = args[i]
    const isArray = Array.isArray(arg)

    if (!isArray) {
      res[arg] = obj[arg]
      continue
    }

    const argLength = arg.length
    for (var j = 0; j < argLength; j++) {
      const item = arg[j]
      res[item] = obj[item]
    }
  }

  return res
}

test('Test 1', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 3, c: 9}
  const res = pick(obj, ['a', 'c'])

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 2', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 3, c: 9}
  const res = pick(obj, 'a', 'c')

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 3', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 3, b: 5, d: undefined}
  const res = pick(obj, ['a', 'b', 'd'])

  expect(JSON.stringify(res) === JSON.stringify(expected))
})

test('Test 4', () => {
  const obj = {a: 3, b: 5, c: 9}
  const expected = {a: 3}
  const res = pick(obj, ['a', 'a'])

  expect(JSON.stringify(res) === JSON.stringify(expected))
})
