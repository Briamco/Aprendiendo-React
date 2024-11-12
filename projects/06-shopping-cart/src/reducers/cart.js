export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_ITEM: 'ADD_TO_ITEM',
  REMOVE_ITEM: 'REMOVE_FROM_ITEM',
  CLEAR_CART: 'CLEAR_CART',
}

export const updateLocalStorage = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }
      
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }
    
    case 'REMOVE_FORM_CART' : {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)

      updateLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART' : {
      updateLocalStorage(cartInitialState)
      return cartInitialState
    }
  }

  return state
}