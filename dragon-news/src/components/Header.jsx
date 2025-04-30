import React from 'react'
import logo from '../assets/logo.png'
import { format } from 'date-fns'
const Header = () => {
  return (
    <div>
        <div className='flex flex-col items-center gap-3'>
            <img className='max-w-[80vw]' src={logo} alt="logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM, MM, yyyy")}</p>
        </div>
    </div>
  )
}

export default Header