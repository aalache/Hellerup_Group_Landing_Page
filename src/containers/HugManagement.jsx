import { ImageCard } from "../components"
import { hugData, images } from "../constants"


const HugManagement = () => {

  const category = images.hug_images.sports
 

  return (
    <section className="min-h-screen w-full  bg-white">
      <div className="max-w-7xl py-10 px-2 sm:px-5 mx-auto space-y-10">
        <div className="space-y-1">
          <h2 className="capitalize text-4xl md:text-5xl pb-3 font-semibold overflow-hidden">HUG Management</h2>
          <h3 className="text-gray-700">THE LEADING TALENTS AGENCY</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* text */}
          <ul className="flex flex-col gap-4 ">
            {hugData.map((item,index) => (
              <li key={index} className={index %2 !== 0 ? "bg-[#f8f9fa] border-l-3 rounded-md border-red-800 p-2 shadow-sm text-[13px] md:text-[14.5px]" : "text-gray-600 text-sm md:text-[15px] p-2"}> {item.content} </li>
            ))}
          </ul>
          {/* images */}
          <div className="grid grid-cols-4   gap-1">
             {category.map((item,index) => (
              // <img src={item.image} alt="" />
              <ImageCard key={index} {...item}/>
             ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HugManagement