import v from '../../src/validators'

jest.disableAutomock()

describe('Testing Number validator', () => {
  it('Should return true with Number Contructor', () => {
    const number = Number(1)
    expect(v.Number(number)).toBeTruthy()
  })

  it('Should return true with a Number litteral', () => {
    const number = 1
    expect(v.Number(number)).toBeTruthy()
  })

  it('Should return true with weird Numbers', () => {
    const plusZero = +0
    const minusZero = +0
    const infinity = Infinity
    expect(v.Number(plusZero)).toBeTruthy()
    expect(v.Number(minusZero)).toBeTruthy()
    expect(v.Number(infinity)).toBeTruthy()
  })

  it('Should return false with other types', () => {
    const string = 'foo'
    const array = []
    const object = {}
    const bool = true
    const fn = () => {}
    const regExp = new RegExp()
    const date = new Date()

    expect(v.Number(string)).toBeFalsy()
    expect(v.Number(array)).toBeFalsy()
    expect(v.Number(object)).toBeFalsy()
    expect(v.Number(bool)).toBeFalsy()
    expect(v.Number(fn)).toBeFalsy()
    expect(v.Number(regExp)).toBeFalsy()
    expect(v.Number(date)).toBeFalsy()
  })
})
