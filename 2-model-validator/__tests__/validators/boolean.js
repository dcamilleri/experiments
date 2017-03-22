import v from '../../src/validators'

jest.disableAutomock()

describe('Testing Boolean validator', () => {
  it('Should return true with Boolean Primitive', () => {
    const bool = Boolean(false)
    expect(v.Boolean(bool)).toBeTruthy()
  })

  it('Should return true with Boolean expression', () => {
    const bool = true
    expect(v.Boolean(bool)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const number = 1
    const string = 'foo'
    const array = []
    const object = {}
    const fn = () => {}
    const date = new Date()
    const regExp = new RegExp()

    expect(v.Boolean(number)).toBeFalsy()
    expect(v.Boolean(string)).toBeFalsy()
    expect(v.Boolean(array)).toBeFalsy()
    expect(v.Boolean(object)).toBeFalsy()
    expect(v.Boolean(fn)).toBeFalsy()
    expect(v.Boolean(date)).toBeFalsy()
    expect(v.Boolean(regExp)).toBeFalsy()
  })
})
