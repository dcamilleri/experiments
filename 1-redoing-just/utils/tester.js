const chalk = require('chalk')

function test (name, fn) {
  try {
    fn()
    console.log(chalk.green(`${name} passed!`))
  } catch (e) {
    console.log(chalk.red(`${name} failed with error: ${e}`))
  }
}

function expect (condition) {
  if (condition === false) {
    throw Error()
  }
}

function expectThrow (fn, ...args) {
	try {
		fn.apply(null, args)
	} catch (e) {
    return
	}

	throw new Error(`'${fn.name}' is expected to throw an error`)
}

module.exports = { test, expect, expectThrow }

