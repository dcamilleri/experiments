const { test, expect } = require('../utils/tester')

function flip (obj) {
  return Object
    .keys(obj)
    .reduce((prev, next) => {
      prev[obj[next]] = next
      return prev
    }, {})
}

test('Test 1', () => {
  const obj = {a: 'x', b: 'y', c: 'z'}
  const expected = {x: 'a', y: 'b', z: 'c'}
  const flippedObj = flip(obj)

  expect(JSON.stringify(flippedObj) === JSON.stringify(expected))
})

test('Test 2', () => {
  const obj = {a: 1, b: 2, c: 3}
  const expected = {'1': 'a', '2': 'b', '3': 'c'}
  const flippedObj = flip(obj)

  expect(JSON.stringify(flippedObj) === JSON.stringify(expected))
})

test('Test 3', () => {
  const obj = {a: false, b: true}
  const expected = {false: 'a', true: 'b'}
  const flippedObj = flip(obj)

  expect(JSON.stringify(flippedObj) === JSON.stringify(expected))
})