import v from '../../src/validators'

jest.disableAutomock()

describe('Testing ArrayOf validator', () => {
  it('Should return a validator function', () => {
    const validator = v.ArrayOf(v.String)

    expect(v.Function(validator)).toBeTruthy()
  })

  it('Should return true with an Array of something', () => {
    const arrayOfString = ['foo', 'bar', 'baz']
    const arrayOfNumbers = [1, 2, 3]

    expect(v.ArrayOf(v.String)(arrayOfString)).toBeTruthy()
    expect(v.ArrayOf(v.Number)(arrayOfNumbers)).toBeTruthy()
  })

  it('Should return false with an Array of different types', () => {
    const badArrayOf = ['foo', 1, 'baz']

    expect(v.ArrayOf(v.String)(badArrayOf)).toBeFalsy()
  })
})
