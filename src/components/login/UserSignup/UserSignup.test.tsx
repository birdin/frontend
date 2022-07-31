import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import UserSignup from './UserSignup'

describe('UserSignupPage form elments', () => {
  it('should render the form', () => {
    render(<UserSignup />)
  })

  it('should render email input', () => {
    render(<UserSignup />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('should render password input', () => {
    render(<UserSignup />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('should render confirm password input', () => {
    render(<UserSignup />)
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toHaveClass('password')
  })

})

describe('Valid data', () => {
  it('Calls on submit function', async () => {
    const mockOnSubmit = jest.fn()
    render(<UserSignup actions={mockOnSubmit} />)

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Email'), {
        target: { value: 'helo@email.com' }
      })
      fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: 'password' }
      })
      fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
        target: { value: 'password' }
      })
    })
    await act(async () => {
      fireEvent.click(screen.getAllByText('Sign Up')[0])
    })
    expect(mockOnSubmit).toHaveBeenCalled()
  })

  it("Sholdn have the same value", async () => {
    render(<UserSignup />)
    const email = screen.getByPlaceholderText('Email')
    fireEvent.change(email, { target: { value: 'email2' } })
    expect(email).toHaveValue('email2')
  })
})

describe('Describe invalid data', () => {
  it('invalid email address', async () => {
    const mockOnSubmit = jest.fn()
    render(<UserSignup onSubmit={mockOnSubmit} />)

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Email'), {
        target: { value: 'helocom' }
      })
      fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: 'password' }
      })
      fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
        target: { value: 'password' }
      })
    })
    await act(async () => {
      fireEvent.click(screen.getAllByText('Sign Up')[0])
    })
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

})