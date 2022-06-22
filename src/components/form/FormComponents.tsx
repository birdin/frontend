import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  label{
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const FormGroup = styled.div`
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #eaeaea;
  svg {
    fill: #5d5d5d;
    margin: 0 0.25rem;
  }
`

export const Button = styled.button`
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
