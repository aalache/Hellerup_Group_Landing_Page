import { useState, useEffect } from 'react';
import {images} from '../constants'

const Brands = () => {
    const categories = ['cosmetics', 'fashion', 'food__baverage', 'perfume'];

    const [brands, setBrands] = useState(images.brands.cosmetics);
    const [activeBrand, setActiveBrand] = useState('cosmetics');

    useEffect(() => {
        setBrands(images.brands[activeBrand]);
    }, [activeBrand]);

  return (
    <div className="min-h-screen w-full  bg-white ">
        <div className="w-full max-w-7xl  mx-auto px-5 py-15 space-y-8">
            <h2 className="font-semibold text-7xl capitalize ">Brands</h2>

            {/* switch buttons */}
            <div className='flex items-center justify-center gap-2'>
                {
                    categories.map((item ,index) => (
                        
                        <button key={index} onClick={() => setActiveBrand(item)} className={activeBrand === item ? 'px-4 py-2 rounded-full text-sm bg-black text-white font-semibold' : 'px-4 py-2 rounded-full text-sm bg-gray-200/40'}>
                            {item}
                        </button>
                    ))
                }
            </div>

            <div className="grid grid-cols-5 grid-rows-2  gap-0.5">
                {
                    brands.map((item ,index) => (
                        <div key={`brand-${index}`} className='flex relative items-center justify-center w-full rounded-sm overflow-hidden border border-gray-300/40 row-span-1 group'>
                            <img src={item.bg} alt="" className='absolute inset-0 z-0 w-full h-full object-cover' />
                            <div className='p-2 z-10 bg-white h-full w-full flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                                <img  src={item.logo} alt="" className=' ' />
                            </div>
                        </div>
                    ))

                }

            </div>
        </div>
    </div>
  )
}

export default Brands