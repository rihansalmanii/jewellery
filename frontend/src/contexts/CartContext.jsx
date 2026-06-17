import React, { createContext, useContext, useState } from 'react'


const cartContext = createContext();


const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product])
        console.log(cartItems)
        console.log(cartItems.length)
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item._id !== id))
    }

    const clearCart = () => {
        setCartItems([])
    }

  return (
    <cartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
        {children}
    </cartContext.Provider>
  )
}

export const useCart = () => useContext(cartContext);

export default CartProvider