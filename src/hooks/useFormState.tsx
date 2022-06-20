import React, { useState } from 'react'

const useFormState = ({ type = '' }) => {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
    type
  }
}

export default useFormState
