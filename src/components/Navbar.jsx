import { useTranslation } from 'react-i18next'
import {images} from '../constants'
import { ChevronDown, Languages, Menu ,XIcon} from 'lucide-react'
import { useState } from 'react';




const Navbar = ({toggleNav,setToggleNav}) => {

    const {t, i18n} = useTranslation();

    const [isOpen,setIsOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen((prev) => !prev);
    }

     // Translation keys
    const navLinksKeys = ["about", "brands", "subsidiaries", "management", "career", "contact"];

  return (
    <div className=" z-999 bg-red-800/0  backdrop-blur-lg w-full  lg:w-5xl xl:w-7xl fixed top-2 sm:top-5 justify-self-center lg:rounded-lg  flex items-center justify-between ">
        <div className='w-[160px] h-[55px] overflow-hidden '>
            <img src={images.logo} alt="logo" className='w-full h-full object-cover scale-150' />
        </div>


        <ul className="hidden lg:flex gap-3">
            { navLinksKeys.map((key ,index) => (
                <a href={`#${key}`} key={`nav-link-${index}`} className='h-full group p-2 '>
                    <li  className='text-gray-200 text-sm font-base font-bold group-hover:text-red-800 transition-all duration-150 ease-in-out'>{t(`nav.${key}`)}</li>
                    <div className='w-0 group-hover:w-full h-[2px] bg-red-800 relative top-2 transition-all duration-200 ease-in-out'/>
                </a>
            ))}
        </ul>

         {/* languages */}
        <div className='hidden lg:flex px-2 '>
            <button className='pointer flex text-white gap-0.5' onClick={() => setIsOpen((prev) => !prev)}>
                <Languages size={25} />
                <span className='text-red-900 font-semibold'>{i18n.language.toUpperCase()}</span>
                <ChevronDown size={20}/>
            </button>

            {/* dropdown menu */}
            { isOpen && 
                <div className='absolute righ-0 top-3 rounded-sm overflow-hidden gap-1 text-white bg-red-900 shadow-sm h-auto  flex items-center justify-between backdrop-blur-md '>
                    <button className='p-1 hover:bg-red-700 hover:text-white hover:font-bold transition-all ease-in duration-100' onClick={() => changeLanguage("en")}>
                        EN
                    </button>
                    <button className='p-1  hover:bg-blue-700 hover:text-white hover:font-bold transition-all ease-in duration-100' onClick={() => changeLanguage("fr")}>
                        FR
                    </button>
                </div>
            }
        </div>

        <div className='flex lg:hidden px-2 '>
            {!toggleNav 
            ? 
            <Menu size={28}  className='text-red-800 hover:text-white hover:scale-110 transition-all duration-100 ease-in-out' onClick={() => setToggleNav(true)}/> 
            :
            <XIcon size={28} className='hover:scale-105 justify-self-end text-red-800 hover:text-white transition-all duration-100 ease-in-out' onClick={() => setToggleNav(false)}/>}
               
        </div>
    

    </div>
  )
}

export default Navbar