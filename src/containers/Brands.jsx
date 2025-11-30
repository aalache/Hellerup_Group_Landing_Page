import {images} from '../constants'

const Brands = () => {
    const brands = images.brands;
  return (
    <div className="min-h-screen w-full  bg-white ">
        <div className="w-full max-w-7xl  mx-auto px-5 py-15 space-y-8">
            <h2 className="font-semibold text-7xl capitalize ">Brands</h2>

            <div className="grid grid-cols-5 grid-rows-4 gap-0.5">
                {
                    brands.cosmetics.map((item ,index) => (
                        <div className='flex p-1 items-center justify-center w-full border border-gray-300/40 row-span-1  '>
                            <img key={index} src={item} alt="" className=' ' />
                        </div>
                    ))

                }
                {
                    brands.perfume.map((item ,index) => (
                        <div className='flex p-1 items-center justify-center w-full border border-gray-300/40 row-span-1  '>
                            <img key={index} src={item} alt="" className=' ' />
                        </div>
                    ))
                }

                {
                    brands.fashion.map((item ,index) => (
                        <div className='flex p-1 items-center justify-center w-full border border-gray-300/40 row-span-1  '>
                            <img key={index} src={item} alt="" className=' ' />
                        </div>
                    ))
                }

                { 
                    brands.food_baverage.map((item ,index) => (
                        <div className='flex p-1 items-center justify-center w-full border border-gray-300/40 row-span-1  '>
                            <img key={index} src={item} alt="" className=' ' />
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Brands