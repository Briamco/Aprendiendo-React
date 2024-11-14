/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { cart,removeFormCart , addToCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => {
            const isProductInCart = checkProductInCart(product)
            
            return (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button 
                  style={{
                    backgroundColor: isProductInCart ? 'red' : '#09f',
                  }}
                  onClick={() => {
                    isProductInCart 
                    ? removeFormCart(product) 
                    : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )}
        )
        }
      </ul>
    </main>
  )
}