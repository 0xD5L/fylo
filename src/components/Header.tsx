// import React from 'react'
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='header p-19 flex -mt-7 justify-between max-md:'>
        <img className='logo max-md:w-18 max-md:h-6 max-md:-ml-10' src={logo} width={100} height={100} alt="Fylo Logo"/>

        <div className='nav-links text-gray-300 flex gap-9 items-center text-1xl max-md:flex max-md:gap-4 max-md:text-md'>
            <a href="#">Features</a>
            <a href="#">Team</a>
            <a href="#">Sign In</a>
        </div>
    </div>
  )
}

export default Header