import {useState} from 'react'
import { useTranslation } from 'react-i18next'
import { CircleXIcon ,Languages, ChevronDown} from 'lucide-react'
import {images} from '../constants'

const Menu = ({toggleNav, setToggleNav}) => {

    const [isOpen,setIsOpen] = useState(false);

    const {t, i18n} = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen((prev) => !prev);
    }

     // Translation keys
     const navLinksKeys = ["about", "brands", "subsidiaries", "management", "career", "contact"];

  return (
    <>
        {toggleNav && (

            <div className='z-1000 bg-red-800/40  backdrop-blur-lg h-screen w-[70%] sm:w-[50%]  fixed inset-0 px-2 py-3 sm:px-3 sm:py-5 slide-in'>
                
                {/* <CircleXIcon size={28} className='hover:scale-105 justify-self-end text-red-700 hover:text-white transition-all duration-100 ease-in-out' onClick={() => setToggleNav(false)}/> */}
                
                <div className='flex flex-col gap-3'>
                    
                    <div className='w-[160px] h-[55px] overflow-hidden '>
                        <img src={images.logo} alt="logo" className='w-full h-full object-cover scale-150' />
                    </div>

                    <ul className="flex flex-col gap-3 px-5 pt-5">
                        { navLinksKeys.map((key ,index) => (
                            <a href={`#${key}`} className='h-full group p-2 '>
                                <li key={index} className='text-gray-200 text-sm font-base font-bold group-hover:text-red-800 transition-all duration-150 ease-in-out'>{t(`nav.${key}`)}</li>
                                <div className='w-0 group-hover:w-full h-[2px] bg-red-800 relative top-2 transition-all duration-300 ease-in-out'/>
                            </a>
                        ))}
                    </ul>

                    {/* languages */}
                    <div className='flex  px-5 pt-10'>
                        <button className='pointer flex text-white gap-0.5' onClick={() => setIsOpen((prev) => !prev)}>
                            <Languages size={25} />
                            <span className='text-red-900 font-semibold'>{i18n.language.toUpperCase()}</span>
                            <ChevronDown size={20}/>
                        </button>

                        {/* dropdown menu */}
                        { isOpen && 
                            <div className='relative righ-3 top-0 rounded-sm overflow-hidden gap-1 text-white bg-red-900 shadow-sm h-auto  flex items-center justify-between backdrop-blur-md '>
                                <button className='p-1 hover:bg-red-700 hover:text-white hover:font-bold transition-all ease-in duration-100' onClick={() => changeLanguage("en")}>
                                    EN
                                </button>
                                <button className='p-1  hover:bg-blue-700 hover:text-white hover:font-bold transition-all ease-in duration-100' onClick={() => changeLanguage("fr")}>
                                    FR
                                </button>
                            </div>
                        }
                    </div>

                </div>
            </div>
        )}
    </>
  )
}

export default Menu