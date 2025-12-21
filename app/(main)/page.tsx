import React from 'react'
import HeroSection from './_components/Hero'
import HomeCategoriesFilter from './_components/HomeCategoriesFilter'
import PopularCategories from './_components/PopularCategories'
import HomeProducts from './_components/HomeProducts'
import HomeVendors from './_components/HomeVendors'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 ">
            <HeroSection/>
            <HomeVendors/>
            <HeroSection/>

            <HomeCategoriesFilter/>
            <HomeProducts/>
            <PopularCategories/>

    </div>
  )
}

export default HomePage
