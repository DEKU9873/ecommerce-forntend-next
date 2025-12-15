import ProductCard from '@/components/shared/ProductCard'



const WishlistSection = () => {

  return (
    <div className='overflow-y-auto hide-scrollbar grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-8'>
      
            <ProductCard  />
            <ProductCard  />
            <ProductCard  />
            <ProductCard  />
            <ProductCard  />
    

    </div>
  )
}

export default WishlistSection
