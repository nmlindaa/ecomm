/** @jsxImportSource @emotion/react */

import Button from 'components/atoms/Button'
import Typography from 'components/atoms/Typography'
import { func, number, string } from 'prop-types'
import { useState } from 'react'
import { cartItemStyle } from './CartItem.style'

const CartItem = ({ id, title, amount, changeAmount }) => {
  const [currentAmount, setAmount] = useState(amount)

  const updateAmount = (value) => {
    setAmount(value)
    changeAmount(value, id)
  }

  return (
    <div css={cartItemStyle.wrapper}>
      <div css={cartItemStyle.image} data-testid={`product-img-${id}`}></div>

      <div css={cartItemStyle.content}>
        <Typography variant="heading" mb={16}>
          {title}
        </Typography>

        <div css={cartItemStyle.counter}>
          <Button
            onClick={() => updateAmount(currentAmount - 1)}
            variant="secondary"
            kind="small"
            disabled={currentAmount <= 1}
          >
            -
          </Button>

          {currentAmount}

          <Button
            onClick={() => updateAmount(currentAmount + 1)}
            variant="secondary"
            kind="small"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  amount: number.isRequired,
  changeAmount: func.isRequired,
}

export default CartItem
