import v from '../../src/validators'

jest.disableAutomock()

describe('Testing Timestamp validator', () => {
  it('Should return true with a timestamp', () => {
    const timestamp = Date.now()
    expect(v.Timestamp(timestamp)).toBeTruthy()
  })

  it('Should return false with other types except number', () => {
    const number = 1
    const string = 'foo'
    const array = []
    const object = {}
    const bool = true
    const fn = () => {}
    const date = new Date()
    const regExp = new RegExp()

    expect(v.Timestamp(number)).toBeTruthy()

    expect(v.Timestamp(string)).toBeFalsy()
    expect(v.Timestamp(array)).toBeFalsy()
    expect(v.Timestamp(object)).toBeFalsy()
    expect(v.Timestamp(bool)).toBeFalsy()
    expect(v.Timestamp(fn)).toBeFalsy()
    expect(v.Timestamp(date)).toBeFalsy()
    expect(v.Timestamp(regExp)).toBeFalsy()
  })
})
