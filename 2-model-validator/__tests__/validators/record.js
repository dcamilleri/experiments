import v from '../../src/validators'

jest.disableAutomock()

const fakeSchema = {
  hash: v.String,
  nbStuff: v.Number,
  users: v.ArrayOf(v.String)
}

const nestedSchema = {
  id: v.String,
  record: v.Record(fakeSchema)
}

describe('Testing Record validator', () => {
  it('Should return a validator function', () => {
    const validator = v.Record(fakeSchema)

    expect(v.Function(validator)).toBeTruthy()
  })

  it('Should return true with a simple Record', () => {
    const data = {
      hash: 'foo',
      nbStuff: 1,
      users: ['foo', 'bar', 'baz']
    }

    expect(v.Record(fakeSchema)(data)).toBeTruthy()
  })

  it('Should return true with a bad Record', () => {
    const data = {
      hash: 'foo',
      nbStuff: 'foo',
      users: ['foo', 'bar', 'baz']
    }

    expect(v.Record(fakeSchema)(data)).toBeFalsy()
  })

  it('Should return true with nested Records', () => {
    const nestedData = {
      id: 'foo',
      record: {
        hash: 'foo',
        nbStuff: 1,
        users: ['foo', 'bar', 'baz']
      }
    }

    expect(v.Record(nestedSchema)(nestedData)).toBeTruthy()
  })

  it('Should return true with bad nested Records', () => {
    const nestedData = {
      id: 'foo',
      record: {
        hash: 'foo',
        nbStuff: 'foo',
        users: ['foo', 'bar', 1]
      }
    }

    expect(v.Record(nestedSchema)(nestedData)).toBeFalsy()
  })
})
