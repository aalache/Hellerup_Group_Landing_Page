
const Hero = () => {
  return (
    
      <div className="w-full  h-screen  hero-bg  ">

        <div className=" w-full h-full flex items-end justify-center px-2 py-8 sm:px-5 sm:py-5 lg:px-20 lg:py-10  ">

                {/* <div  className=" flex flex-col  justify-between relative text-center text-black  ">
                    <span className="custom-text text-5xl font-semibold opacity-0 animate-[fadeDown_5.5s_ease-in-out_1s_forwards] text-shadow-lg ">HELLERUP</span>
                    <span className='custom-text text-[20rem] opacity-0 animate-[scaleIn_5s_ease-in-out_forwards] leading-[13rem] text-shadow-lg'>H</span>
                    <span className='custom-text text-2xl font-semibold relative bottom-[24%] opacity-0 animate-[fadeUp_6s_ease-in-out_2s_forwards] text-shadow-md'>GROUP</span>
                </div> */}

                <div className='relative w-7xl  flex flex-col gap-2  '>
                    <div className='text-[8vw] md:text-[8vw] lg:text-[6.5vw] text-black  flex flex-col gap-1 text-shadow-lg  font-bold  '> 
                        <span className="bg-white backdrop-blur-sm  rounded-t-md px-3  w-fit ">HUG</span>
                        <span className="bg-white backdrop-blur-sm rounded-t-md px-3 w-fit ">MANAGEMENT</span>
                    </div>
                    <p className="text-[6vw] md:text-[6.5vw] lg:text-[4.5vw] p-2  md:py-0 bg-red-700 backdrop-blur-sm  w-fit  rounded-t-md  font-base  font-bold text-white text-shadow-md ">Fashion <span className="text-black"> & </span> Branding</p> 
                </div>
        </div>

      </div>
    
  )
}

export default Hero