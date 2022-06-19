import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import UserSignupPage from './UserSignupPage'

describe('UserSignupPage form elments', () => {
  it('should render the form', () => {
    render(<UserSignupPage />)
  })

  it('should render email input', () => {
    render(<UserSignupPage />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('should render password input', () => {
    render(<UserSignupPage />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('should render confirm password input', () => {
    render(<UserSignupPage />)
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
  })
})

describe('Valid data', () => {
  it('Calls on submit function', async () => {
    const mockOnSubmit = jest.fn()
    render(<UserSignupPage onSubmit={mockOnSubmit} />)

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
      fireEvent.click(screen.getByRole("button"))
    })
    expect(mockOnSubmit).toHaveBeenCalled()
  })
})
