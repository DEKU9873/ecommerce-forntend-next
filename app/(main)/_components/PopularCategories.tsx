import Image from "next/image"
import HeroImage from "../../../public/Hero/hero.png"

const PopularCategories = () => {
    return (
        <div className="container ">
           <div className="flex flex-col gap-4 border border-primary/30 rounded-md overflow-y-auto p-4 md:p-8 mt-10">
             <h2 className="font-bold text-2xl">Popular Categories</h2>
            <hr className="border-primary/30" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    Array(6).fill(0).map((_, index) => (
                        <div key={index}>
                            <div className=" h-full p-6 border border-primary/30 bg-primary/3">
                                <div className="flex items-center  flex-row gap-4">
                                    <div className="border border-primary/30 bg-secondary  ">
                                        <Image src={HeroImage} alt="hero image" className="w-20 h-20 hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-1 ">
                                        <h2 className="font-bold text-sm md:text-lg text-start">Apple AirPods 3rd generation </h2>
                                        <p>(2) items Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
           </div>
        </div>
    )
}

export default PopularCategories
