/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { arrayOf, shape, string } from 'prop-types'
import { useContext } from 'react'
import { CartCtx } from 'utils/providers/CartProvider'
import ProductItem from '../ProductItem'

const ProductList = ({ list }) => {
  const { state, updateState } = useContext(CartCtx)

  const removeFromCart = (id) => {
    const newCarts = state.carts.filter((item) => item.id !== id)
    updateState(newCarts)
  }

  const addToCart = (id, title) => {
    const newCarts = [...state.carts, { id, title, amount: 1 }]
    updateState(newCarts)
  }

  return (
    <div
      css={css({
        padding: '24px 8px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      })}
    >
      {list.map((item, idx) => {
        const isProductAdded = state.carts.some((cart) => cart.id === item.id)

        return (
          <ProductItem
            key={`product-${idx}`}
            title={item.title}
            id={item.id}
            isProductAdded={isProductAdded}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )
      })}
    </div>
  )
}

ProductList.propTypes = {
  list: arrayOf(
    shape({
      title: string,
      id: string,
    })
  ),
}

export default ProductList
