import React from 'react';
import img1 from "../assets/img1.jpeg";

const HomeImages = () => {
  return (
      <div className='max-w-[1140px m-auto w-full md:flex mt:-[-75px]'>
          <div  className='relative p-4 '>
              <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Projects</h3>
              <img src={img1} alt="/" className="w-full h-full object-cover relative border-4 border-white shadow-lg"/>
          </div>
          <div className='relative p-4 '>
              <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Projects</h3>
              <img src={img1} alt="/"
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"/>
          </div>
          <div className='relative p-4 '>
              <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Projects</h3>
              <img src={img1} alt="/" className="w-full h-full object-cover relative border-4 border-white shadow-lg"/>
          </div>
          
    </div>
  )
}

export default HomeImages;