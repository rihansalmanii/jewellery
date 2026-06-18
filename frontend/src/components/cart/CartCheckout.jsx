import React from 'react'

const CartCheckout = () => {

    // get subtotal of all the items in cart
    

  return (
    <div className='fixed bottom-0 bg-[#F7F7F7] w-full py-6'>
        <div>
          <div>
            <h3>Subtotal </h3>
          </div>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
  )
}

export default CartCheckout