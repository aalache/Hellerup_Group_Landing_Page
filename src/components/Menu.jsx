import React from 'react'
import { CircleXIcon } from 'lucide-react'
import {images} from '../constants'

const Menu = ({toggleNav, setToggleNav}) => {

    const navLinks = ["About Us", "Brands", "Subsidiaries","HUG Management", "Contact","Career"]

  return (
    <>
        {toggleNav && (

            <div className='z-1000 bg-red-800/15  backdrop-blur-lg h-screen w-[70%] sm:w-[50%]  fixed inset-0 px-2 py-3 sm:px-3 sm:py-5 slide-in'>
                
                <CircleXIcon size={28} className='hover:scale-105 justify-self-end text-black hover:text-white transition-all duration-100 ease-in-out' onClick={() => setToggleNav(false)}/>
                
                <div className='flex flex-col gap-3'>
                    
                    <div className='w-[160px] h-[55px] overflow-hidden '>
                        <img src={images.logo} alt="logo" className='w-full h-full object-cover scale-150' />
                    </div>

                    <ul className="flex flex-col gap-3 px-5">
                        { navLinks.map((item ,index) => (
                            <a href="" className='h-full group p-2 '>
                                <li key={index} className='text-gray-200 text-sm font-base font-bold group-hover:text-red-800 transition-all duration-150 ease-in-out'>{item}</li>
                                <div className='w-0 group-hover:w-full h-[2px] bg-red-800 relative top-2 transition-all duration-300 ease-in-out'/>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </>
  )
}

export default Menu