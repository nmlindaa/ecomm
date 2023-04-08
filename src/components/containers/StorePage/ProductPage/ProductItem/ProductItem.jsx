/** @jsxImportSource @emotion/react */
import Button from 'components/atoms/Button'
import Typography from 'components/atoms/Typography'
import { bool, func, string } from 'prop-types'
import { useState } from 'react'
import { productItemStyle } from './ProductItem.style'

const ProductItem = ({
  id,
  title,
  isProductAdded,
  removeFromCart,
  addToCart,
}) => {
  const [isAdded, setIsAdded] = useState(isProductAdded)

  const toggleCart = () => {
    isAdded ? removeFromCart(id) : addToCart(id, title)
    setIsAdded(!isAdded)
  }

  return (
    <div css={productItemStyle.wrapper}>
      <div css={productItemStyle.image} data-testid={`item-${id}`}></div>

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
  id: string.isRequired,
  title: string.isRequired,
  isProductAdded: bool.isRequired,
  removeFromCart: func.isRequired,
  addToCart: func.isRequired,
}

export default ProductItem
