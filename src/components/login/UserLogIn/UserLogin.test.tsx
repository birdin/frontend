import { screen, render, fireEvent, act } from '@testing-library/react'
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
    })
  })

  describe('Valid data', () => {
    it('Calls on submit function', async () => {
      const mockOnSubmit = jest.fn()
      render(<UserLogin action={mockOnSubmit} actions={{signUp: ()=>{}}}/>)
      await act(async () => {
        fireEvent.change(screen.getByPlaceholderText('Email'), {
          target: { value: 'email@email.com' }
        })
        fireEvent.change(screen.getByPlaceholderText('Password'), {
          target: { value: 'password' }
        })
      })
      await act(async () => {
        fireEvent.click(screen.getAllByText('Sign in')[0])
      })
      expect(mockOnSubmit).toHaveBeenCalled()
    })

  })
})
