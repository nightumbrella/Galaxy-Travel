import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 pt-5 fixed left-0 top-0 w-full'>
        <h1>Galaxy-Travel</h1>
        <ul className='flex items-center gap-10'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/pricing">Prices</NavLink></li>
            <li><NavLink to="/training">Training</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar