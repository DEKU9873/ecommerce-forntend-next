import ProductCard from "@/components/shared/ProductCard"




const ProductsSection = () => {
  
const products = new Array(6).fill(0)
  return (
    <div
      className={
        "h-[80vh] overflow-y-auto hide-scrollbar grid gap-2 pb-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
         
      }
    >
      { (
          products?.map((_, index) => (
            <ProductCard key={index}  />
          ))
        )
      }
    </div>
  )
}

export default ProductsSection
