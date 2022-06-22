import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import styled from 'styled-components'

const ShowPassword = ({action = ()=>{}, state, toggle}: any) => {

    const onClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        toggle()
        if(state) {
            action()
        }
    }

  return (
    <Button onClick={onClick} className={state ? 'active' : undefined}>
        {!state ? <AiOutlineEye data-testid='off'/> : <AiOutlineEyeInvisible data-testid='on'/>}
    </Button>
  )
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #e3e3e3;
  }
`

export default ShowPassword