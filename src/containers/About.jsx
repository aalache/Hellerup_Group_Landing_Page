import { images } from "../constants"
import { aboutUsData } from "../constants"

const About = () => {
  return (
    <div className="min-h-screen w-full  bg-black border-t-2 border-red-700 text-white">
      <div className="w-full max-w-7xl  mx-auto px-5 pt-15 pb-5  space-y-8">
        
        <h2 className=" capitalize text-6xl font-semibold text-white">Who We Are</h2>

        <div className="w-full  grid md:grid-cols-2 md:grid-rows-2 gap-5 ">
          <div className="flex flex-col justify-center  gap-4 text-gray-300 ">
            <p >{aboutUsData[0].content}</p>
            <p>{aboutUsData[1].content}</p>
          </div>

          <div className="bg-red-200  max-h-[36vh] md:max-h-[45vh] lg:max-h-[36vh] rounded-sm overflow-hidden hover:scale-105 transition-all duration-100 ease-in-out">
            <img src={images.companyGroup} alt="company group" className="w-full h-full object-cover"/>
          </div>

          <div className="bg-red-100 max-h-[36vh] md:max-h-[45vh] lg:max-h-[36vh] rounded-sm overflow-hidden hover:scale-105 transition-all duration-100 ease-in-out ">
            <img src={images.analysis} alt="company analysis" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center gap-4 text-gray-300">
            <p>{aboutUsData[2].content}</p>
            <p>{aboutUsData[3].content}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About