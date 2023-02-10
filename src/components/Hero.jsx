import React from 'react';
import img1 from "../assets/img1.jpeg";

const Hero = () => {
  return (
      <div className='w-full h-[90vh]'>
          <img src={img1} alt="background-image"
          className='w-full '/>
          <div className='max-w-[1140px m-auto]'>
              <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                  <h1 className='font-bold text-4xl'>Welcome to</h1>
                  <h2 className=' text-4xl py-4 italic'>Ludmer Engineering</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto ab voluptatum esse iste architecto eligendi necessitatibus! Corrupti, quos recusandae.</p>
              </div>
          </div>
    </div>
  )
}

export default Hero;