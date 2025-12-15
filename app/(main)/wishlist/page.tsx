import WishlistSection from "./_components/WishlistSection"


const WishlistPage = () => {


  return (
    <div className='container'>
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold text-2xl'>Wishlist</h2>
    
            <WishlistSection  />

       
      </div>
    </div>
  )
}

export default WishlistPage
