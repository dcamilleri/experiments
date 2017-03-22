import v from '../../src/validators'

jest.disableAutomock()

describe('Testing Function validator', () => {
  it('Should return true with Function Contructor', () => {
    const fn = new Function() // eslint-disable-line no-new-func
    expect(v.Function(fn)).toBeTruthy()
  })

  it('Should return true with Function expression', () => {
    function doNothing () {}
    expect(v.Function(doNothing)).toBeTruthy()
  })

  it('Should return true with Function declaration', () => {
    const fn = () => {}
    expect(v.Function(fn)).toBeTruthy()
  })

  it('Should return true with ES6 Classes', () => {
    const klass = class foo {}
    expect(v.Function(klass)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const number = 1
    const string = 'foo'
    const array = []
    const object = {}
    const bool = true
    const regExp = new RegExp()
    const date = new Date()

    expect(v.Function(number)).toBeFalsy()
    expect(v.Function(string)).toBeFalsy()
    expect(v.Function(array)).toBeFalsy()
    expect(v.Function(object)).toBeFalsy()
    expect(v.Function(bool)).toBeFalsy()
    expect(v.Function(regExp)).toBeFalsy()
    expect(v.Function(date)).toBeFalsy()
  })
})
