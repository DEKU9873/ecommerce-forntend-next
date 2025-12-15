
import CartSection from './_components/CartSection';
import OrderSummary from './_components/OrderSummary';
import DeliveryAddress from './_components/DeliveryAddress';

const CartPage = () => {



  return (
    <div className='bg-primary/3 py-4 px-4'>
      <div className='container flex flex-col gap-4 '>
        <h2 className='font-bold text-2xl'>Shopping Cart</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='md:col-span-2'>
                <CartSection  />
              </div>
              <div className='flex flex-col gap-4'>
                <OrderSummary  />
                <DeliveryAddress   />
              </div>
            </div>
 
      </div>
    </div>

  )
}

export default CartPage
