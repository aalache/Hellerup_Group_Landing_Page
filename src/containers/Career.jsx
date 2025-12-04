import CareerCard from "../components/CareerCard"
import careerPaths from "../constants/career"



const Career = () => {
   
  

  return (
    <div className=" w-full bg-black text-white">
        <div className="max-w-7xl h-full px-3 py-10 mx-auto  space-y-15 ">
            <h1 className="text-7xl overflow-hidden">Career</h1>


            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1">
              <div className=" col-span-1">
                <h2 className="text-[8vw] md:text-[3vw]">Discover your Future</h2>
                <p>Be a part of our ecosystem</p>
              </div>

              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">

                {careerPaths.map((item,index) => (
                  <CareerCard key={index} {...item}/>
                ))}

              </div>

            </div>

        </div>



    </div>
  )
}

export default Career