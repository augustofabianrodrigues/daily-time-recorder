import auth from '@/utils/auth'

describe(`/utils/auth`, () => {
  it(`stores access token and gets`, () => {
    auth.storeAccessToken('token')
    expect(auth.getStoredAcessToken()).to.equal('token')
  })

  it(`stores user info and gets`, () => {
    auth.storeUserInfo({
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@bar.com',
      username: 'foobar'
    })
    expect(auth.getStoredUserInfo()).to.deep.equal({
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@bar.com',
      username: 'foobar'
    })
  })
})
