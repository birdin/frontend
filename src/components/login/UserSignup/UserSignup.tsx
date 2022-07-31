import React from 'react'
import useFormState from '../../../hooks/useFormState'
import validateEmail from '../../../utils/validateEmail'
import validatePassword from '../../../utils/validatePassword'
import { Form, Title, InputContainer, FormGroup, Input, Button } from '../../form/FormComponents'
import { AiOutlineMail, AiOutlineLock, } from 'react-icons/ai'
import ShowPassword from '../../form/ShowPassword'
import { useToogle } from '../../../hooks/useToogle'
import { getTypeOfInput } from '../../../utils/inputUtils'
import useErrorState from '../../../hooks/useErrorState'

const UserSignup = (props: any) => {
  const emailState = useFormState({ type: 'email' })
  const passwordState = useFormState({ type: 'password' })
  const confirmPasswordState = useFormState({ type: 'password' })
  const [pendingApiCall, setPendingApiCall] = React.useState(false)

  const {error, setError} = useErrorState()


  const passwordToggle = useToogle(false)
  const confirmPasswordToggle = useToogle(false)

  const onSubmitButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()  
    const password = passwordState.value
    const confirmPassword = confirmPasswordState.value
    const email = emailState.value
    if(!validateEmail(email)) {
      setError({...error, email: true})
      return;
    }
    if(!validatePassword(password, confirmPassword)) {
      setError({...error, password: true})
      return;
    }

    if (password === confirmPassword) {
      setError({...error, email: false})
      setPendingApiCall(true)
      props.actions.signUp({username: email, "displayName": "test-display", password}).then(() => {
        setPendingApiCall(false)
        props.action()
      }).catch(() => {
        setPendingApiCall(false)
      })
    }
  }

  return (
      <>
        <Form>
          <Title>Your first time here?</Title>
          <FormGroup>
            <label>Email</label>
            { error.email && <label>Email error</label> }
            <InputContainer>
              <AiOutlineMail />
              <Input placeholder="Email" {...emailState}/>
            </InputContainer>
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            { error.password && <label>Passwors not valid</label> }
            <InputContainer>
              <AiOutlineLock />
              <Input placeholder="Password" {...passwordState} {...getTypeOfInput(passwordToggle.state)}/>
              <ShowPassword data-testid="change-password"  state={passwordToggle.state} toggle={passwordToggle.toggle} />
            </InputContainer>
          </FormGroup>
          <FormGroup>
            <label>Confirm Password</label>
            <InputContainer>
              <AiOutlineLock />
              <Input placeholder="Confirm Password" {...confirmPasswordState} {...getTypeOfInput(confirmPasswordToggle.state)}/>
              <ShowPassword data-testid="change-confirm-password"  state={confirmPasswordToggle.state} toggle={confirmPasswordToggle.toggle}/>
            </InputContainer>
          </FormGroup>
          <Button type="submit" onClick={(e) => onSubmitButton(e)} disabled={pendingApiCall}>
            { pendingApiCall && 
              <div className="spinner-border" role="status">
                <span className="sr-only"/>
              </div> } 
              Sign Up
          </Button>
        </Form>
      </>  
  )
}

export default UserSignup
