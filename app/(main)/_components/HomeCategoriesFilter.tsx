"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { useState } from 'react'


const categories = [
  {
    id: 1,
    name: "Electronic",
  },
  {
    id: 2,
    name: "Fashion",
  },
  {
    id: 3,
    name: "Home Appliances",
  },
  {
    id: 4,
    name: "Sports",
  },
  {
    id: 5,
    name: "Books",
  },
  {
    id: 6,
    name: "Beauty & Care",
  },
];

const HomeCategoriesFilter = () => {

  const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState("")

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

 


    return (
        <div className='container flex md:flex justify-between items-center'>
            <div className='hidden md:flex flex-wrap justify-center items-center gap-2'>
                {categories?.map((category) => (
                    <Button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.name)}
                        className={`rounded-2xl px-6 border 
                            ${selectedCategory === category.name
                                ? 'bg-primary text-background border-primary'
                                : 'bg-secondary text-primary border-primary/30 hover:text-background hover:bg-primary/80'
                            }`}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>

            <div>
                <Button
                onClick={()=> router.push("/products")}
                    className='rounded-2xl px-6 bg-background border border-primary text-primary hover:text-background'
                >
                    See All
                </Button>
            </div>
        </div>
    )
}

export default HomeCategoriesFilter
