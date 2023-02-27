import React from 'react'
import hero from '../../assets/hero.mp4'

const Hero = () => {
  return (
    <div className='fixed w-[100vw]  h-full -z-20'>
        <video className='w-full h-full opacity-40' autoPlay loop >
            <source src={hero} />
        </video>
    </div>
  )
}

export default Hero