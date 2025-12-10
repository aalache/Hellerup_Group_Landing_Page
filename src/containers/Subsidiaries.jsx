import { useTranslation } from "react-i18next"
import { images } from "../constants"

const Subsidiaries = () => {

    const {t,i18n} = useTranslation()
    const subsidiaries = images.subsidiaries;

  return (
    <section id="subsidiaries" className="w-full bg-black shadow-xl">
        <div className="w-full max-w-7xl  mx-auto px-1 py-10 sm:px-5 sm:py-15 space-y-8">
            <h2 className="capitalize text-4xl md:text-5xl pb-3 font-semibold overflow-hidden text-white ">{t(`headers.subsidiaries`)}</h2>
            <div className="w-full flex h-50 ">
                {subsidiaries.map((item,index)=> (
                    <img key={index} src={item.image} alt="logo" className="rounded-full  grayscale hover:grayscale-0 hover:rounded-md transition-all  duration-200 ease-in-out " />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Subsidiaries