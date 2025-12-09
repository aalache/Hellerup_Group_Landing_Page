import { useState, useEffect } from 'react';
import {images} from '../constants'
import { useTranslation } from 'react-i18next';
import { Shirt, Sparkles, SprayCan, Utensils } from 'lucide-react';

const Brands = () => {
    const categories = ['cosmetics', 'fashion', 'food__baverage', 'perfume'];
    const categorieIcons = [<Sparkles size={20}/>,<Shirt size={20}/>,<Utensils size={20}/>,<SprayCan size={20}/>]

    const [brands, setBrands] = useState(images.brands.cosmetics);
    const [activeBrand, setActiveBrand] = useState('cosmetics');

    const {t,i18n} = useTranslation();

    useEffect(() => {
        setBrands(images.brands[activeBrand]);
    }, [activeBrand]);

  return (
    <section id='brands' className="min-h-screen w-full  bg-white ">
        <div className="w-full max-w-7xl  mx-auto px-1 py-10 sm:px-5 sm:py-15 space-y-8">
            <h2 className="font-semibold text-5xl md:text-7xl overflow-hidden py-2 capitalize ">{t(`headers.brands`)}</h2>

            {/* switch buttons */}
            <div className='hidden sm:flex items-center justify-center gap-1 sm:gap-2 md:gap-5'>
                {
                    categories.map((item ,index) => (
                        
                        <button key={index} onClick={() => setActiveBrand(item)} className={activeBrand === item ? ' p-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm bg-black text-white font-semibold' : ' p-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm bg-gray-200/40'}>
                            {t(`brands.${item}`)}
                        </button>
                    ))
                }
            </div>

            <div className='flex sm:hidden items-center justify-center gap-5'>
                {
                    categories.map((item ,index) => (
                        
                        <button key={index} onClick={() => setActiveBrand(item)} className={activeBrand === item ? ' py-2 px-6 flex  items-center justify-center sm:px-4  rounded-md text-xs sm:text-sm bg-black text-white font-semibold' : ' p-2 px-6 flex  items-center justify-center sm:px-4  rounded-md text-xs sm:text-sm bg-gray-200/40'}>
                            {categorieIcons[index]}
                        </button>
                    ))
                }
            </div>

            <div className="grid grid-cols-2  sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 auto-rows-fr   gap-0.5">
                {
                    brands.map((item ,index) => (
                        <div key={`brand-${index}`} className='flex relative items-center justify-center w-full rounded-sm overflow-hidden border border-gray-300/40 row-span-1 group'>
                            <img src={item.bg} alt="" className='absolute inset-0 z-0 w-full h-full object-cover' />
                            <div className='p-2 z-10 bg-white h-full w-full flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                                <img  src={item.logo} alt="" className='' />
                            </div>
                        </div>
                    ))

                }

            </div>
        </div>
    </section>
  )
}

export default Brands