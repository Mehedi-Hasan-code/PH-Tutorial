import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {
  const AuthInfo = {
    user: 'ovi'
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider