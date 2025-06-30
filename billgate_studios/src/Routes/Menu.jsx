import React from 'react'
import { FaTwitter, FaX } from 'react-icons/fa6'
import { NavLink } from 'react-router'
import { FaYoutube, FaFacebook } from "react-icons/fa";


const Menu = () => {
  return (
    <>
        <div className='flex justify-between pl-4  mt-10 '>
            <ul className='flex flex-col w-full ml-5'>
                <NavLink to="/" className='text-7xl'>home</NavLink>
                <NavLink to="/projects" className='text-7xl'>projects</NavLink>
                <NavLink to="/categories" className='text-7xl'>categories</NavLink>
                <NavLink to="/about" className='text-7xl'>about</NavLink>
                <NavLink to="/contact" className='text-7xl'>contact</NavLink>
                {/* <NavLink to="https://www.youtube.com"><FaYoutube 
                className='mt-2 pt-3 '
                size={30}/>Youtube</NavLink>
                <NavLink to="https://www.twitter.com"><FaTwitter 
                className='mt-2 pt-3 '
                size={30}/>Twitter</NavLink>
                <NavLink to="https://www.facebook.com"><FaFacebook
                className='mt-2 pt-3 '
                size={30}/>Facebook</NavLink> */}

            </ul>
            <FaX className='mr-5' size={50}/>
        </div>
    </>
  )
}

export default Menu