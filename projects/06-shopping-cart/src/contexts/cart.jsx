/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCart = cart.findIndex(item => item.id === product.id)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      { 
        ...product,
        quantity: 1 
      }
    ]))
  }

  const removeFormCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFormCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}