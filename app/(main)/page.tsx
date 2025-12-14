import React from 'react'
import HeroSection from './_components/Hero'
import HomeCategoriesFilter from './_components/HomeCategoriesFilter'
import PopularCategories from './_components/PopularCategories'
import HomeProducts from './_components/HomeProducts'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 ">
            <HeroSection/>
            <HomeCategoriesFilter/>
            <HomeProducts/>
            <PopularCategories/>

    </div>
  )
}

export default HomePage
