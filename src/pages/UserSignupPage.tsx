import React, {useState} from 'react'

const UserSignupPage = (props: any) => {

  const onSubmitButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.onSubmit()
    console.log('submit')
  }

  return (
      <>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" onClick={(e) => onSubmitButton(e)}>Sign Up</button>
        </form>
      </>  
  )
}

export default UserSignupPage
