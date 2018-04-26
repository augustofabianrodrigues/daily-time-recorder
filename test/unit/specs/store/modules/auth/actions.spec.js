/* eslint-disable import/no-webpack-loader-syntax */
const actionsInjector = require('inject-loader!@/store/modules/auth/actions')

const actions = actionsInjector({
  '@/api/auth': {
    register (user) {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            user: {
              firstName: 'foo',
              lastName: 'bar',
              email: 'foo@bar.com',
              username: 'foobar'
            },
            access_token: 'token'
          }
        })
      })
    }
  }
})

describe('auth/actions', () => {
  beforeEach(function () {
    let store = {}

    sinon.stub(localStorage, 'getItem').callsFake(function (key) {
      return store[key]
    })
    sinon.stub(localStorage, 'setItem').callsFake(function (key, value) {
      store[key] = value + ''
      return store[key]
    })
  })

  it('register', async () => {
    const commit = sinon.spy()
    const state = {}

    await actions.register({ commit, state }, {
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@bar.com',
      username: 'foobar',
      password: '123'
    })

    expect(commit.args).to.deep.equal([
      ['registered', {
        user: {
          firstName: 'foo',
          lastName: 'bar',
          email: 'foo@bar.com',
          username: 'foobara'
        },
        access_token: 'token'
      }]
    ])
  })
})
