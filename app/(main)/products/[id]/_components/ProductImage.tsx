"use client"

import { useState } from "react"
import Image from "next/image"

import hpLogo from "../../../../../public/Home/hpLogo.png"
import hero from "../../../../../public/Hero/hero.png"

const images = [
  { id: 1, img: hpLogo },
  { id: 2, img: hero },
  
]

const ProductImage = () => {
  const [coverImage, setCoverImage] = useState(hpLogo)

  return (
    <div className="flex flex-col items-center gap-4">
      
      <div className="flex justify-center items-center border rounded-sm overflow-hidden w-full">
        <Image
          src={coverImage}
          alt="product"
          className="w-full h-125 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex justify-center gap-3 flex-wrap">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.img}
            alt="thumbnail"
            width={80}
            height={80}
            onClick={() => setCoverImage(image.img)}
            className={`w-20 h-20 object-contain border rounded-md cursor-pointer 
              ${
                coverImage === image.img
                  ? "border-primary"
                  : "border-gray-300"
              }
            `}
          />
        ))}
      </div>

    </div>
  )
}

export default ProductImage
