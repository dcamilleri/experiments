import v from '../../src/validators'

jest.disableAutomock()

describe('Testing String validator', () => {
  it('Should return true with a String Contructor', () => {
    const string = String('hey')
    expect(v.String(string)).toBeTruthy()
  })

  it('Should return true with a String litteral', () => {
    const string = 'foo'
    expect(v.String(string)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const number = 1
    const array = []
    const object = {}
    const bool = true
    const fn = () => {}
    const regExp = new RegExp()
    const date = new Date()

    expect(v.String(number)).toBeFalsy()
    expect(v.String(array)).toBeFalsy()
    expect(v.String(object)).toBeFalsy()
    expect(v.String(bool)).toBeFalsy()
    expect(v.String(fn)).toBeFalsy()
    expect(v.String(regExp)).toBeFalsy()
    expect(v.String(date)).toBeFalsy()
  })
})
