import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../Services/firebase.config'

const AuthProvider = ({children}) => {


  // signup using email and password
  const signUpWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const AuthInfo = {
    signUpWithEmailPassword
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider