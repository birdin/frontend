import { screen, render } from '@testing-library/react'
import UserLogin from './UserLogin'

describe('UserLogin', () => {
  describe('Form elements', () => {
    it('should render the form', () => {
      render(<UserLogin />)
    })

    it('should render email input', () => {
      render(<UserLogin />)
      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    })

    it('should render password input', () => {
        render(<UserLogin />)
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
        }
    )
  })
})
