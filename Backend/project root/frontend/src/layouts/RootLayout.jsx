import Home from '../components/Home'
import App from '../App'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  )
}

export default RootLayout