import v from '../../src/validators'

jest.disableAutomock()

describe('Testing RegExp validator', () => {
  it('Should return true with RegExp contructor', () => {
    const regExp = new RegExp()
    expect(v.RegExp(regExp)).toBeTruthy()
  })

  it('Should return true with RegExp expression', () => {
    const regExp = /^foo(bar)?$/i
    expect(v.RegExp(regExp)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const number = 1
    const string = 'foo'
    const array = []
    const object = {}
    const bool = true
    const fn = () => {}
    const date = new Date()

    expect(v.RegExp(number)).toBeFalsy()
    expect(v.RegExp(string)).toBeFalsy()
    expect(v.RegExp(array)).toBeFalsy()
    expect(v.RegExp(object)).toBeFalsy()
    expect(v.RegExp(bool)).toBeFalsy()
    expect(v.RegExp(fn)).toBeFalsy()
    expect(v.RegExp(date)).toBeFalsy()
  })
})
