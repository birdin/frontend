import React from 'react'
import useFormState from '../../../hooks/useFormState'
import validateEmail from '../../../utils/validateEmail'
import { Form, Title, InputContainer, FormGroup, Input, Button } from '../../form/FormComponents'
import { AiOutlineMail, AiOutlineLock, } from 'react-icons/ai'
import ShowPassword from '../../form/ShowPassword'
import { useToogle } from '../../../hooks/useToogle'
import { getTypeOfInput } from '../../../utils/inputUtils'

const UserSignup = (props: any) => {
  const emailState = useFormState({ type: 'email' })
  const passwordState = useFormState({ type: 'password' })
  const confirmPasswordState = useFormState({ type: 'password' })

  const passwordToggle = useToogle(false)
  const confirmPasswordToggle = useToogle(false)

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
        <Form>
          <Title>Your first time here?</Title>
          <FormGroup>
            <label>Email</label>
            <InputContainer>
              <AiOutlineMail />
              <Input placeholder="Email" {...emailState}/>
            </InputContainer>
          </FormGroup>
          <FormGroup>
            <label>Password</label>
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
          <Button type="submit" onClick={(e) => onSubmitButton(e)}>Sign Up</Button>
        </Form>
      </>  
  )
}

export default UserSignup
