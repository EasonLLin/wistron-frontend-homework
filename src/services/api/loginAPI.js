import axios from './index.js'
import MockAdapter from 'axios-mock-adapter'

// var mock = new MockAdapter(axios, { delayResponse: 3000 })
var mock = new MockAdapter(axios)

mock.onPost('/api/login').reply(function(config) {
  const data = JSON.parse(config.data)
  const username = data.username
  const password = data.password

  if (username === 'guest' && password === 'guest') {
    return [
      200,
      {
        token: 'XXXX',
      },
    ]
  } else {
    return [
      401,
      {
        text: 'Unauthorized',
      },
    ]
  }
})

export function* loginAPI({ username, password }) {
  return yield axios({
    url: `/login`,
    method: 'post',
    data: {
      username: username,
      password: password,
    },
  })
}
