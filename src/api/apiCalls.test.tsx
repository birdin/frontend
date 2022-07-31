import axios from 'axios'
import * as apiCalls from './apiCalls'

describe('ApiCalls', () => {
  it('calls api/1.0/users', () => {
    const mockSignUp = jest.fn()
    axios.post = mockSignUp
    const result = apiCalls.signUp({})
    const path = mockSignUp.mock.calls[0][0]
    expect(path).toBe('/api/v1.0/users')
  })
})
