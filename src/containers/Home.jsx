import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen bg-image'>
        {/* <img src={mainBg} loading='lazy' alt="bg"  className='w-full h-full object-cover'/> */}

        <div className='absolute inset-0 bg-black/20 backdrop-blur-3xl  flex flex-col items-center justify-center '>
            <div className=' flex flex-col items-center justify-center gap-8 flex-3/4 '>
                <div  className=" flex flex-col text-center text-white  ">
                    <span className="custom-text text-2xl relative top-[9%] md:top-[14%] opacity-0 animate-[fadeDown_5.5s_ease-in-out_1s_forwards]  ">HELLERUP</span>
                    <span className='custom-text text-[14rem] opacity-0 animate-[scaleIn_5s_ease-in-out_forwards] leading-[13rem]'>H</span>
                    <span className='custom-text relative bottom-[24%] opacity-0 animate-[fadeUp_6s_ease-in-out_2s_forwards] group-gradient-bg'>GROUP</span>
                </div>

                <div className='relative '>
                    <h3 className='text-2xl md:text-3xl text-white font-semibold opacity-0 animate-[fadeUp_1s_ease-in-out_2s_forwards] '>HUG MANAGEMENT</h3>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-8 flex-1/4'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <h1 className='text-center font-semibold text-lg text-gray-300 opacity-0 animate-[fadeUp_1s_ease-in-out_3s_forwards]'>UNDER  CONSTRUCTION</h1>
                    <span className='text-gray-300  text-3xl opacity-0 animate-[fadeUp_1s_ease-in-out_3s_forwards]'>|</span>
                    <span className='uppercase font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 opacity-0 animate-[fadeUp_1s_ease-in-out_3.5s_forwards]'>Coming Soon</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-white text-sm opacity-0 animate-[fadeUp_1s_ease-in-out_4s_forwards]'>hello@hellerupgroup.com</p>
                    <p className='text-white font-semibold text-sm opacity-0 animate-[fadeUp_1s_ease-in-out_4.3s_forwards]'>+212 6 08 08 08 18</p>
                </div>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Home