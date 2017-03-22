import v from '../../src/validators'

jest.disableAutomock()

describe('Testing Promise validator', () => {
  it('Should return true with Promise Constructor', () => {
    const promise = new Promise((resolve) => resolve(true))
    expect(v.Promise(promise)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const number = 1
    const string = 'foo'
    const array = []
    const object = {}
    const bool = true
    const fn = () => {}
    const date = new Date()
    const regExp = new RegExp()

    expect(v.Promise(number)).toBeFalsy()
    expect(v.Promise(string)).toBeFalsy()
    expect(v.Promise(array)).toBeFalsy()
    expect(v.Promise(object)).toBeFalsy()
    expect(v.Promise(bool)).toBeFalsy()
    expect(v.Promise(fn)).toBeFalsy()
    expect(v.Promise(date)).toBeFalsy()
    expect(v.Promise(regExp)).toBeFalsy()
  })
})
