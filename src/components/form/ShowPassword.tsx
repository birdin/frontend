import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const ShowPassword = ({action = ()=>{}, state, toggle}: any) => {


    const onClick = () => {
        toggle()
        if(state) {
            action()
        }
    }

  return (
    <button onClick={onClick} className={state ? 'active' : undefined}>
        {!state ? <AiOutlineEye data-testid='off'/> : <AiOutlineEyeInvisible data-testid='on'/>}
    </button>
  )
}

export default ShowPassword