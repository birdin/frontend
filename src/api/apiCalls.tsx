import axios from 'axios'

export const signUp = (user: object) => {
  return axios.post('http://localhost:8080/api/v1.0/users', user)
}
