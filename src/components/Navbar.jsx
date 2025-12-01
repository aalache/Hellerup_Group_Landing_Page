import {images} from '../constants'
import { Menu } from 'lucide-react'


const Navbar = ({toggleNav,setToggleNav}) => {

    const navLinks = ["About Us", "Brands", "Subsidiaries","HUG Management", "Contact","Career"]

  return (
    <div className=" z-999 bg-red-800/0  backdrop-blur-lg w-full  lg:w-5xl xl:w-7xl fixed top-5 justify-self-center lg:rounded-lg  flex items-center justify-between ">
        <div className='w-[160px] h-[55px] overflow-hidden '>
            <img src={images.logo} alt="logo" className='w-full h-full object-cover scale-150' />
        </div>


        <ul className="hidden lg:flex gap-3">
            { navLinks.map((item ,index) => (
                <a href="" key={`nav-link-${index}`} className='h-full group p-2 '>
                    <li  className='text-gray-200 text-sm font-base font-bold group-hover:text-red-800 transition-all duration-150 ease-in-out'>{item}</li>
                    <div className='w-0 group-hover:w-full h-[2px] bg-red-800 relative top-2 transition-all duration-200 ease-in-out'/>
                </a>
            ))}
        </ul>

         {/* languages */}
        <div className='hidden lg:flex '></div>

        <div className='flex lg:hidden px-2 '>
            <Menu size={28}  className='text-black hover:text-white hover:scale-110 transition-all duration-100 ease-in-out' onClick={() => setToggleNav(true)}/>
        </div>
    

    </div>
  )
}

export default Navbar