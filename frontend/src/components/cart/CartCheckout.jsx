import React, { useEffect } from 'react'
import { useCart } from '../../contexts/CartContext'


const CartCheckout = () => {

    // get subtotal of all the items in cart
    const {cartItems} = useCart();
    console.log("cartPage:",cartItems)

   const total = cartItems.reduce((sum, item) => sum + item.salePrice * item.quantity, 0)
  const numberOfItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)


  return (
    <div className='fixed bottom-0 bg-[#F7F7F7] w-full'>
        <div className='flex flex-col justify-between w-6/7 py-5 gap-5 mx-auto'>
          <div>
          <div className='flex justify-between'>
            <h3 className='font-semibold text-md text-[#4A4A4A]'>Subtotal ({numberOfItems} items)</h3>
            <h3 className='font-semibold text-xl text-[#2f2f2f]'>₹{total.toLocaleString()}</h3>
          </div>
        </div>
        <div className='w-full'>
          <button className='bg-black text-white text-sm font-semibold w-full py-3 uppercase'>Checkout</button>
        </div>
        </div>
      </div>
  )
}

export default CartCheckout