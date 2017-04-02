const { join } = require('path')
const { writeFileSync, readFileSync } = require('fs')
const { execSync } = require('child_process')

/*
*
* This file creates a ready-to-experiment environment for me :)
* With Jest for testing, Standard for linting and all the basic setup I need 
*
*/

console.log()
console.log('Creating your new experiment...')
console.log()

const baseDevDeps = [
  'jest',
  'babel-cli',
  'babel-jest',
  'regenerator-runtime',
  'standard',
  'babel-preset-es2015',
  'babel-preset-stage-0'
]

const BABELRC_CONFIG = {
  presets: [ 'es2015', 'stage-0' ]
}

const PACKAGE_SCRIPTS = {
  scripts: {
    test: 'jest',
    lint: 'standard --fix'
  }
}

const STANDARD_CONFIG = {
  standard: {
    globals: [
      'describe',
      'it',
      'expect'
    ]
  }
}

function installBaseDeps () {
  return execSync(`yarn add ${baseDevDeps.join(' ')} --dev`)
}

function createBabelrc () {
  return writeFileSync('./babelrc', JSON.stringify(BABELRC_CONFIG, null, 2))
}

function createTestFiles () {
  return execSync('mkdir __tests__ && touch __tests__/index.js')
}

function createExpFile () {
  return execSync('touch index.js')
}

function initPackageJson () {
  return execSync('yarn init -y')
}

createBabelrc()

createTestFiles()

createExpFile()

initPackageJson()

installBaseDeps()

let packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))
const finalPackageJson = Object.assign(
  {},
  packageJson,
  STANDARD_CONFIG,
  PACKAGE_SCRIPTS
)

writeFileSync('./package.json', JSON.stringify(finalPackageJson, null, 2))

console.log()
console.log('Here we gooo')
console.log()

