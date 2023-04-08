/** @jsxImportSource @emotion/react */

import Button from 'components/atoms/Button'
import Typography from 'components/atoms/Typography'
import { number, string } from 'prop-types'
import { useContext, useState } from 'react'
import { CartCtx } from 'utils/providers/CartProvider'
import { cartItemStyle } from './CartItem.style'

const CartItem = ({ id, title, amount }) => {
  const { state, updateState } = useContext(CartCtx)
  const [currentAmount, setAmount] = useState(amount)

  const updateAmount = (value) => {
    setAmount(value)
    const newCarts = state.carts.map((cart) => {
      if (cart.id === id) {
        return { ...cart, amount: value }
      }
      return cart
    })
    updateState(newCarts)
  }

  const addAmount = () => {
    updateAmount(currentAmount + 1)
  }

  const subAmount = () => {
    updateAmount(currentAmount - 1)
  }
  return (
    <div css={cartItemStyle.wrapper}>
      <div css={cartItemStyle.image}></div>
      <div css={cartItemStyle.content}>
        <Typography variant="heading" mb={16}>
          {title}
        </Typography>

        <div css={cartItemStyle.counter}>
          <Button
            onClick={() => subAmount()}
            variant="secondary"
            kind="small"
            disabled={currentAmount <= 1}
          >
            -
          </Button>

          {currentAmount}

          <Button onClick={() => addAmount()} variant="secondary" kind="small">
            +
          </Button>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: string,
  title: string,
  amount: number,
}

export default CartItem
