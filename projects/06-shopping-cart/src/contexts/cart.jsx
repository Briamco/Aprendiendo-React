/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
import { cartInitialState, reducer } from "../reducers/cart";

export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(reducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFormCart = product => dispatch({
    type: 'REMOVE_FORM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFormCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFormCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ 
      cart: state, 
      addToCart, 
      removeFormCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}