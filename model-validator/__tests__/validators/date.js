import v from '../../src/validators'

jest.disableAutomock()

describe('Testing Date validator', () => {
  it('Should return true with Date Contructor', () => {
    const date = new Date()
    expect(v.Date(date)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const number = 1
    const string = 'foo'
    const array = []
    const object = {}
    const bool = true
    const fn = () => {}
    const regExp = new RegExp()

    expect(v.Date(number)).toBeFalsy()
    expect(v.Date(string)).toBeFalsy()
    expect(v.Date(array)).toBeFalsy()
    expect(v.Date(object)).toBeFalsy()
    expect(v.Date(bool)).toBeFalsy()
    expect(v.Date(fn)).toBeFalsy()
    expect(v.Date(regExp)).toBeFalsy()
  })
})
