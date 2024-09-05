import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className="flex items-center  justify-center bg-blue-700 lg:h-[77px] h-[76px] ">
      <a>
        <img src={logo} className='absolute left-7 top-4' width={46} height={10} alt="Not" />
      </a>
      <p className="text-4xl font-edu-vic-wa-nt-beginner absolute font-bold left-[100px] lg:left-[105px] text-white">
        H - Media
      </p>
    </div>

  )
}

export default Header