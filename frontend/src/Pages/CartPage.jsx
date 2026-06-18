import React from 'react'
import { useCart } from '../contexts/CartContext'
import NoItems from '../components/cart/NoItems'
import CartItemCard from '../components/cart/CartItemCard'
import CartCheckout from '../components/cart/CartCheckout'



const CartPage = () => {

    const {cartItems, removeFromCart, clearCart} = useCart()

    if(cartItems.length == 0) return <NoItems />


  return (
    <div>
        <div>
            <h1 className='text-xl font-semibold text-[#4C4C4C] px-5 py-10'>MY BAG</h1>
        </div>
      <div className='flex flex-col gap-4 '>
        {cartItems.map((item) => (
        <CartItemCard key={item._id} item={item} removeFromCart={removeFromCart} />
      ))}
      </div>
      <CartCheckout />
    </div>
  )
}

export default CartPage