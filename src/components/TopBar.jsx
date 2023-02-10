import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import Logo from "./LogoDesign/Logo";



const TopBar = () => {
  return (
      <div className='flex justify-between items-center px-4 py-2'> 
          <div className='flex items-center mx-4'>
             
              <h1 className='text-xl font-bold text-gray-700'><Logo /></h1>
          </div>
          <div className='flex'>
              <div className='hidden md:flex items-center px-6'>
                  <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]"/>
                  <p className='text-sm text-gray-700'>8am-5pm</p>
              </div>
              <div className='hidden md:flex items-center px-6'>
                  <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]"/>
                  <p className='text-sm text-gray-700'>
                      514-525-2625
                  </p>
              </div>
              <button>Get a Free Quote</button>
          </div>
    </div>
  )
}

export default TopBar;