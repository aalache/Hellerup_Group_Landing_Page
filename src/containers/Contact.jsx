import { images } from "../constants"

const Contact = () => {
  return (
    <section id="contact" className=" w-full contact-bg   ">
        <div className="full  h-full py-5   bg-[#000814]/70 backdrop-blur-sm rounded-t-md">

            <div className="max-w-7xl mx-auto space-y-7 ">
                {/* logo */}
                <div className=" h-[8vh] w-full overflow-hidden bg-linear-to-r from-black via-white to-black rounded-sm  flex items-center justify-center  ">
                    <img src={images.logo} alt="logo" className=""  />
                </div>

                {/* info */}
                <div className="w-full grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 px-5 md:px-8 py-5 text-white/80">
                    {/* Offices */}
                    <div className="">
                        <div className="space-y-4">
                            <h2 className="font-bold text-red-500">Offices</h2>
                            {/* belgium */}
                            <div className="space-y-1.5">
                                    <h3 className="font-semibold text-sm md:text-base text-white ">Belgium (Head Office)</h3>
                                    <ul className=" list-inside  list-disc text-sm space-y-1.5 ">
                                        <li >Hellerup Group</li>
                                        <li>26 Rue Philippe Baucq, 1040 Brussels</li>
                                        <li>RC: BE0782 310 047</li>
                                        <li>Phone: +32 472 98 89 26</li>
                                    </ul>
                            </div>
                            {/* Morocco */}
                            <div className="space-y-1.5">
                                    <h3 className="font-semibold text-sm md:text-base text-white">Morocco Office</h3>
                                    <ul className="list-disc list-inside text-sm space-y-1.5">
                                        <li>48 Av. Fal Ould Oumeir, Agdal, Rabat 10000</li>
                                        <li>RC: 186641</li>
                                        <li>ICE: 003715054000078</li>
                                        <li>Phone: +212 6 08 08 08 18</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className="space-y-4   ">
                        <h2 className="font-semibold text-red-500">Contact Emails</h2>
                        <div className="space-y-1">
                            <p className="font-semibold text-sm md:text-base text-white">General</p>
                            <p className="text-sm">hello@hellerupgroup.com</p>
                        </div>
                    </div>
                    {/* Team */}
                    <div className="   space-y-4">
                        <h2 className="font-semibold text-red-500">Team</h2>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h4 className="font-semibold text-sm md:text-base text-white">Team Manager – Magdalena</h4>
                                <p className="text-sm">hello@hellerupgroup.com</p>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-semibold text-sm md:text-base text-white">Assistant Manager – Alena</h4>
                                <div className="text-sm " >
                                    <p >booking@hellerupgroup.com</p>
                                    <p >hug@hellerupgroup.com</p>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-semibold text-sm md:text-base text-white">Brand Manager – Donatien</h4>
                                <p className="text-sm">donatien@hellerupgroup.com</p>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-semibold text-sm md:text-base text-white">Sales Team Manager – Batoul</h4>
                                <p className="text-sm">orders@hellerupgroup.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyRight */}
                <div className="w-full text-xs sm:text-sm   text-center text-gray-400 pt-10 ">
                    <p className="">&copy; {new Date().getFullYear()}  Hellerup Group. All rights reserved.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact