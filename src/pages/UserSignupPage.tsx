import React, {useState} from 'react'
import useFormState from '../hooks/useFormState'
import validateEmail from '../utils/validateEmail'

const UserSignupPage = (props: any) => {
  const emailState = useFormState({ type: 'email' })
  const passwordState = useFormState({ type: 'password' })
  const confirmPasswordState = useFormState({ type: 'password' })

  const onSubmitButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()  
    const password = passwordState.value
    const confirmPassword = confirmPasswordState.value
    const email = emailState.value
    if(!validateEmail(email)) {
      return;
    }
    if (password === confirmPassword) {
      props.onSubmit()
    }
  }

  return (
      <>
        <form>
          <label>Email</label>
          <input placeholder="Email" {...emailState}/>
          <label>Password</label>
          <input placeholder="Password" {...passwordState}/>
          <label>Confirm Password</label>
          <input placeholder="Confirm Password" {...confirmPasswordState}/>
          <button type="submit" onClick={(e) => onSubmitButton(e)}>Sign Up</button>
        </form>
      </>  
  )
}

export default UserSignupPage
