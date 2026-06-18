import React, { createContext, useContext, useEffect, useState } from 'react'


const cartContext = createContext();


const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(() => {
        try {
            const storedCartItems = localStorage.getItem('cart')
        return storedCartItems ? JSON.parse(storedCartItems) : []
        } catch(err) {
            console.log(err.message)
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existingItem = prev.find((prevItem) => prevItem._id === product._id)

            if(existingItem) {
                return prev.map((prevItem) => prevItem._id === product._id ? {...prevItem, quantity: prevItem.quantity + 1} : prevItem)
            }
            return [...prev, {...product, quantity : 1}]
        })
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item._id !== id))
    }


    const updateQuantity = (id, quantity) => {
        setCartItems((prev) => prev.map((item) => item._id === id ? {...item, quantity} : item))
    }

    const clearCart = () => {
        setCartItems([])
    }

  return (
    <cartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart, updateQuantity}}>
        {children}
    </cartContext.Provider>
  )
}

export const useCart = () => useContext(cartContext);

export default CartProvider