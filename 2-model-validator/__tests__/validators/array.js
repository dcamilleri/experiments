import v from '../../src/validators'

jest.disableAutomock()

describe('Testing Array validator', () => {
  it('Should return true with Array Contructor', () => {
    const array = new Array() // eslint-disable-line no-array-constructor
    expect(v.Array(array)).toBeTruthy()
  })

  it('Should return true with Array litteral', () => {
    const array = [1, 2, 3]
    expect(v.Array(array)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const number = 1
    const string = 'foo'
    const object = {}
    const bool = true
    const fn = () => {}
    const regExp = new RegExp()
    const date = new Date()

    expect(v.Array(number)).toBeFalsy()
    expect(v.Array(string)).toBeFalsy()
    expect(v.Array(object)).toBeFalsy()
    expect(v.Array(bool)).toBeFalsy()
    expect(v.Array(fn)).toBeFalsy()
    expect(v.Array(regExp)).toBeFalsy()
    expect(v.Array(date)).toBeFalsy()
  })
})
