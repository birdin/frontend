import React from 'react'
import useFormState from '../../../hooks/useFormState'
import validateEmail from '../../../utils/validateEmail'
import styled from 'styled-components'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import ShowPassword from '../../form/ShowPassword'
import { useToogle } from '../../../hooks/useToogle'

const UserSignup = (props: any) => {
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
        <Form>
          <Title>Welcome Back!</Title>
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
              <Input placeholder="Password" {...passwordState}/>
            </InputContainer>
          </FormGroup>
          <FormGroup>
            <label>Confirm Password</label>
            <InputContainer>
              <AiOutlineLock />
              <Input placeholder="Confirm Password" {...confirmPasswordState}/>
            </InputContainer>
          </FormGroup>
          <Button type="submit" onClick={(e) => onSubmitButton(e)}>Sign Up</Button>
        </Form>
      </>  
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  label{
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const FormGroup = styled.div`
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #eaeaea;
  svg {
    fill: #5d5d5d;
    margin: 0 0.25rem;
  }
`

const Button = styled.button`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: #7f7f7f;
  color: #fff;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover{
    background-color: #000;
    color: #fff;
  }
`

export default UserSignup
