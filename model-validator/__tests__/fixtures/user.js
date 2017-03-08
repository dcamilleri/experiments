import v from '../../src/validators'

const providerRecord = {
  id: v.Number,
  provider: v.String,
  enabled: v.Boolean
}

export const userModel = {
  id: v.Number,
  hash: v.String,
  firstName: v.String,
  lastName: v.String,
  isAuthenticated: v.Boolean,
  signedUpAt: v.Date,
  oauthProviders: v.ArrayOf(v.Record(providerRecord))
}

export const validUserResource = {
  id: 1,
  hash: 'john.doe',
  firstName: 'John',
  lastName: 'Doe',
  isAuthenticated: true,
  signedUpAt: new Date(2016, 0, 1),
  oauthProviders: [
    {
      id: 1,
      provider: 'google',
      enabled: true
    },
    {
      id: 2,
      provider: 'slack',
      enabled: false
    }
  ]
}

export const badUserResource = {
  id: 1,
  hash: 'john.doe',
  firstName: 'John',
  lastName: 123,
  isAuthenticated: true,
  signedUpAt: new Date(2016, 0, 1),
  oauthProviders: [
    {
      id: 1,
      provider: 1,
      enabled: true
    },
    {
      id: 2,
      provider: 'slack',
      enabled: false
    }
  ]
}

