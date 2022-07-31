import { useState } from 'react'
import UserSignup from '../../components/login/UserSignup/UserSignup'
import UserLogin from '../../components/login/UserLogIn/UserLogin'
import * as apiCalls from '../../api/apiCalls'

const Login = ({ initial = 'signup' }) => {
  const [loginSection, setLoginSection] = useState(initial)

  const actions = {
    signUp: apiCalls.signUp
    }

  const getLoginSection = () => {
    switch (loginSection) {
      case 'login':
        return <UserLogin actions={actions}/>
      case 'signup':
        return <UserSignup actions={actions}/>
      default:
        return null
    }
  }

  return <>{getLoginSection()}</>
}

export default Login
