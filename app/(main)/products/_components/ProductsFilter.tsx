"use client"
import { Checkbox } from "@/components/ui/checkbox"

import { useState } from "react"

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
]

const brands = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Samsung",
  },
  {
    id: 3,
    name: "Google",
  },
  {
    id: 4,
    name: "Microsoft",
  },
]

const price = [
  {
    id: 1,
    name: 'Under $100'
  },
  {
    id: 2,
    name: '$100 - $200'
  },
  {
    id: 3,
    name: '$200 - $300'
  },
  {
    id: 4,
    name: '$300 - $400'
  },
  {
    id: 5,
    name: '$400 - $500'
  },
  {
    id: 6,
    name: 'Over $500'
  },
]

interface IProductsFilterProps {
  categoryId: string;
  brandId: string;
  handleSelectCategory: (id: string) => void;
  handleSelectBrand: (id: string) => void;
}

const ProductsFilter = ({ categoryId, brandId, handleSelectCategory, handleSelectBrand }:IProductsFilterProps) => {

    const [priceId, setPriceId] = useState("");

      const handleSelectPrice = (id: string) => {
    if (priceId === id) {
      setPriceId("");
    } else {
      setPriceId(id);
    }
  }


  return (
    <div className="h-[80vh] overflow-y-auto hide-scrollbar flex flex-col gap-6 pb-8">

      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Product Categories</h2>

        {
          <ul className="space-y-2">
            { categories && categories.map((option, optionIdx) => (
              <li key={option.id} className="flex items-center">
                <Checkbox
                  className="mx-2 border-primary"

                  id={`category-${optionIdx}`}
                  checked={categoryId === option.id.toString()}
                  onCheckedChange={() => handleSelectCategory(option.id.toString())}
                />
                <label
                  htmlFor={`category-${optionIdx}`}
                  className="ml-3 text-sm text-primary cursor-pointer"
                >
                  {option?.name}
                </label>
              </li>
            ))}
          </ul>
        }

      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Brands</h2>

        {
          <ul className="space-y-2">
            { brands && brands.map((option, optionIdx) => (
              <li key={option.id} className="flex items-center">
                <Checkbox
                  className="mx-2 border-primary"
                  id={`category-${optionIdx}`}
                  checked={brandId === option.id.toString()}
                  onCheckedChange={() => handleSelectBrand(option.id.toString())}
                />
                <label
                  htmlFor={`category-${optionIdx}`}
                  className="ml-3 text-sm text-primary cursor-pointer"
                >
                  {option?.name}
                </label>
              </li>
            ))}
          </ul>
        }

      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Price</h2>

        {
          <ul className="space-y-2">
            {price.map((option, optionIdx) => (
              <li key={option.id} className="flex items-center">
                <Checkbox
                  className="mx-2 border-primary"
                  id={`category-${optionIdx}`}
                  checked={priceId === option.id.toString()}
                  onCheckedChange={() => handleSelectPrice(option.id.toString())}

                />
                <label
                  htmlFor={`category-${optionIdx}`}
                  className="ml-3 text-sm text-primary cursor-pointer"
                >
                  {option?.name}
                </label>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default ProductsFilter
