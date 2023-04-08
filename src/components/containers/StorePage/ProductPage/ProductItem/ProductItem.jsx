/** @jsxImportSource @emotion/react */
import Button from 'components/atoms/Button'
import Typography from 'components/atoms/Typography'
import { string } from 'prop-types'
import { useContext, useState } from 'react'
import { CartCtx } from 'utils/providers/CartProvider'
import { productItemStyle } from './ProductItem.style'

const ProductItem = ({ id, title }) => {
  const { state, updateState } = useContext(CartCtx)

  const isProductAdded =
    state.carts.length > 0 ? state.carts.find((cart) => cart.id === id) : false

  const [isAdded, setIsAdded] = useState(isProductAdded)

  const removeFromCart = () => {
    setIsAdded(false)
    const newCarts = state.carts.filter((item) => item.id !== id)
    updateState(newCarts)
  }

  const addToCart = () => {
    setIsAdded(true)
    const newCarts = [...state.carts, { id, title, amount: 1 }]
    updateState(newCarts)
  }

  const toggleCart = () => {
    isAdded ? removeFromCart() : addToCart()
  }

  return (
    <div css={productItemStyle.wrapper}>
      <div css={productItemStyle.image}></div>
      <Typography
        variant="body"
        textAlign="center"
        css={productItemStyle.title}
      >
        {title}
      </Typography>
      <Button
        kind="small"
        variant={isAdded ? 'secondary' : 'primary'}
        onClick={() => toggleCart()}
        isFullWidth
      >
        {isAdded ? 'Remove' : 'Add'}
      </Button>
    </div>
  )
}

ProductItem.propTypes = {
  id: string,
  title: string,
}

export default ProductItem
