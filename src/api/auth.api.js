import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const authApi = {
  login : (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/login', {
          email: email,
          password: password
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
