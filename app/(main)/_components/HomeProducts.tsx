import ProductCard from '@/components/shared/ProductCard'

const HomeProducts = () => {

  return (
    <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
 

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

    </div>
  )
}

export default HomeProducts
