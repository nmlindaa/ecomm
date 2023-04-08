import Button from 'components/atoms/Button'
import ButtonWrapper from 'components/atoms/ButtonWrapper'
import MessageInfo from 'components/atoms/MessageInfo'
import { useContext, useState } from 'react'
import { CartCtx } from 'utils/providers/CartProvider'
import CartItem from '../CartItem'
import OrderReviewModal from '../OrderReviewModal'
import OrderSuccessModal from '../OrderSuccessModal'

const CartList = () => {
  const { state, updateState } = useContext(CartCtx)
  const [showReviewModal, toggleReviewModal] = useState(false)
  const [showSuccessModal, toggleSuccessModal] = useState(false)
  const sendOrder = () => {
    updateState([])
    toggleReviewModal(false)
    toggleSuccessModal(true)
  }
  if (state.carts.length < 1) {
    return (
      <div>
        <OrderSuccessModal
          isShown={showSuccessModal}
          closeModal={() => toggleSuccessModal(false)}
        />
        <MessageInfo
          messages={[
            'Sorry, it seems like your cart is empty.',
            'Please add items to continue with your purchase.',
          ]}
          action={() => (location.href = '/store')}
          actionLabel="Find products"
        />
      </div>
    )
  }
  return (
    <div>
      {state.carts?.map((item, idx) => (
        <CartItem
          key={`cart-${idx}`}
          id={item.id}
          title={item.title}
          amount={item.amount}
        />
      ))}

      <ButtonWrapper>
        <Button onClick={() => toggleReviewModal(true)}>Review</Button>
      </ButtonWrapper>

      <OrderReviewModal
        isShown={showReviewModal}
        closeModal={() => toggleReviewModal(false)}
        sendOrder={() => sendOrder()}
        purchasingList={state.carts}
      />
    </div>
  )
}

export default CartList
