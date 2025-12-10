import { useTranslation } from "react-i18next"
import { ImageCard } from "../components"
import { hugData, images } from "../constants"
import { useState,useEffect } from "react"


const HugManagement = () => {

  const [categoryImages,setCategoryImages] = useState(images.hug_images.sports)
  const {t,i18n} = useTranslation();

  const [activeCategory, setActiveCategory] = useState('fashion')

  useEffect(() => {
    setCategoryImages(images.hug_images[activeCategory])
  },[activeCategory])

  return (
    <section id="management" className="min-h-screen w-full  bg-white">
      <div className="max-w-7xl py-10 px-2 sm:px-5 mx-auto space-y-10">
        <div className="space-y-1">
          <h2 className="capitalize text-4xl md:text-5xl pb-3 font-semibold overflow-hidden">{t('headers.management')}</h2>
          <h3 className="text-gray-700">THE LEADING TALENTS AGENCY</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-2">
          {/* text */}
          <ul className="flex flex-col gap-4 ">

            {hugData.hugText.map((item,index) => (
              <li key={index} className={index %2 !== 0 ? "bg-[#f8f9fa] border-l-3 rounded-md border-red-800 p-2 shadow-sm text-[13px] md:text-[14.5px]" : "text-gray-600 text-sm md:text-[15px] p-2"}> {t(`hugManagement.${index}.content`)} </li>
            ))}

          </ul>

          {/* images */}
          <div className="space-y-5 flex flex-col items-center justify-center">
            {/* categories */}
            <div className="flex  w-full items-center justify-center gap-2 sm:gap-5 ">

              {hugData.hugCategories.map((item,index)=> (
                <button key={index} onClick={() => setActiveCategory(item)} className={activeCategory === item ? 'bg-black text-white font-semibold shadow-md px-2 sm:px-3 py-1.5 rounded-md text-sm'  : "bg-gray-200/50 px-2 sm:px-3 py-1.5 rounded-md text-sm"} >
                  {t(`hugCategories.${item}`)}
                </button>
              ))}

            </div>

            <div className="grid grid-cols-4   gap-1">

              {categoryImages.map((item,index) => (
                <ImageCard key={index} {...item} category={activeCategory}/>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HugManagement