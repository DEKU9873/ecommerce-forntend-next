"use client"
import { useState } from "react"
import ProductsFilter from "./_components/ProductsFilter";
import ProductsSection from "./_components/ProductsSection";

const ProductsPage = () => {
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const handleSelectCategory = (id: string) => {
    if (categoryId === id) {
      setCategoryId("");
    } else {
      setCategoryId(id);
    }
  };

  const handleSelectBrand = (id: string) => {
    if (brandId === id) {
      setBrandId("");
    } else {
      setBrandId(id);
    }
  }

  return (
    <div className="container">
      <div className="flex flex-col">
        <h2 className="py-4 text-lg font-semibold">Get the products as your needs</h2>
        <div className="grid grid-cols-5 gap-4 border-y border-primary/50 px-2">
          <div className="border-r border-primary/50 py-4 ">
            <div><ProductsFilter categoryId={categoryId} brandId={brandId} handleSelectCategory={handleSelectCategory} handleSelectBrand={handleSelectBrand} /></div>
          </div>
          <div className="col-span-4 py-4">
            <ProductsSection  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage