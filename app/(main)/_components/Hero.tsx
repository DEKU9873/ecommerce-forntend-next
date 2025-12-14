
import { Button } from '@/components/ui/button'
import HeroImage from "../../../public/Hero/hero.png"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='container '>
      <div className='min-h-[40vh] flex flex-col md:flex-row justify-center md:justify-between items-center rounded-2xl gap-12 overflow-x-hidden py-2 sm:gap-16 lg:gap-24 bg-secondary'>
        <div className=' flex flex-col justify-center items-center text-center gap-4 mx-20'>
          <h2 className='font-bold text-4xl sm:text-3xl '>
            Grab Upto 50% Off On <br /> Selected Headphone
          </h2>
          <Button size='lg'>
            By Now
          </Button>
        </div>
        <div className='lg:mx-40'>
          <Image  src={HeroImage} alt="hero" className="hidden md:block md:max-w-[250px] h-auto "
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
