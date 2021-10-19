import axios from 'axios'

class AuthUserService {
  async execute (code:String) {
    try {
      const url = 'https://github.com/login/oauth/acess_token'
      const response = await axios.post(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code
        },
        headers: {
          Accept: 'application/json'
        }
      })

      return response.data
    } catch (err) {
      return console.log(err)
    }
  }
}

export { AuthUserService }
