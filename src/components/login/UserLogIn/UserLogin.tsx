import React from 'react'
import useFormState from '../../../hooks/useFormState'
import validateEmail from '../../../utils/validateEmail'
import { Form, Title, InputContainer, FormGroup, Input, Button } from '../../form/FormComponents'
import { AiOutlineMail, AiOutlineLock, } from 'react-icons/ai'
import { useToogle } from '../../../hooks/useToogle'
import { getTypeOfInput } from '../../../utils/inputUtils'
import ShowPassword from '../../form/ShowPassword'

const UserLogin = () => {

    const emailState = useFormState({ type: 'email' })
    const passwordState = useFormState({ type: 'password' })

    const passwordToggle = useToogle(false)

    const onSubmitButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const password = passwordState.value
        const email = emailState.value
        if(!validateEmail(email)) {
            return;
        }
    }



    return (
        <>
          <Form>
            <Title>Welcome back!</Title>
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
            <Button type="submit" onClick={(e) => onSubmitButton(e)}>Sign Up</Button>
          </Form>
        </>  
    )
}

export default UserLogin