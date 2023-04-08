import { createContext, useEffect, useState } from 'react'

export const initState = {
  carts: [],
  status: 'idle',
}

export const CartCtx = createContext()

const CartProvider = ({ children }) => {
  const [state, setState] = useState(initState)

  const updateState = (newCarts) => {
    setState({
      status: 'completed',
      carts: newCarts,
    })
    localStorage.setItem('carts', JSON.stringify(newCarts))
  }

  useEffect(() => {
    if (state.status === 'idle') {
      const carts = JSON.parse(localStorage.getItem('carts') || null) || []

      setState({
        status: 'completed',
        carts,
      })
    }
  }, [])

  return (
    <CartCtx.Provider value={{ state, updateState }}>
      {children}
    </CartCtx.Provider>
  )
}

export default CartProvider
