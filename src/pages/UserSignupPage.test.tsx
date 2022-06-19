import { render } from '@testing-library/react'
import UserSignupPage from './UserSignupPage'

describe('UserSignupPage form', () => {
  it('should render the form', () => {
    render(<UserSignupPage />)
  })
  
  it('should render email input', ()=>{
    const { getByLabelText } = render(<UserSignupPage />)
    const emailInput = getByLabelText('Email')
    expect(emailInput).toBeInTheDocument()
  }) 

  
})

