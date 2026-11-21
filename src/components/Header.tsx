// import React from 'react'
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='header p-19 flex -mt-7 justify-between'>
        <img className='logo' src={logo} width={150} height={150} alt="Fylo Logo"/>

        <div className='nav-links text-gray-300 flex gap-19 items-center text-2xl'>
            <a href="#">Features</a>
            <a href="#">Team</a>
            <a href="#">Sign In</a>
        </div>
    </div>
  )
}

export default Header