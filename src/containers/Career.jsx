import { useTranslation } from "react-i18next"
import {CareerCard} from "../components"
import careerPaths from "../constants/career"



const Career = () => {
   
  const {t,i18n} = useTranslation()
  

  return (
    <section id="career" className=" w-full bg-black text-white">
        <div className="max-w-7xl h-full px-3 py-10 mx-auto  space-y-15 ">
            <h1 className="text-6xl overflow-hidden capitalize">{t('headers.career.sectionTitle')}</h1>


            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1">
              <div className=" col-span-1">
                <h2 className="text-[8vw] md:text-[3vw]">{t('headers.career.subtitle')}</h2>
                <p>{t('headers.career.slogan')}</p>
              </div>

              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">

                {careerPaths.map((item,index) => (
                  <CareerCard 
                    key={index}
                    title={t(`career.${index}.title`)}
                    dept={t(`career.${index}.dept`)}
                    location={t(`career.${index}.location`)}
                    description={t(`career.${index}.description`)}
                  />
                ))}

              </div>

            </div>

        </div>



    </section>
  )
}

export default Career