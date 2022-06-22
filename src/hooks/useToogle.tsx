import { useState } from 'react'

export const useToogle = (initial = true) => {
  const [state, setState] = useState(initial)
  return {
    state,
    toggle: () => setState(!state)
  }
}
