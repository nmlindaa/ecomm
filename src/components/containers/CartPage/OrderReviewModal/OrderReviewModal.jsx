/** @jsxImportSource @emotion/react */

import Button from 'components/atoms/Button'
import ButtonWrapper from 'components/atoms/ButtonWrapper'
import Modal from 'components/atoms/Modal'
import Typography from 'components/atoms/Typography'
import { arrayOf, bool, func, number, shape, string } from 'prop-types'
import { orderReviewModalStyle } from './OrderReviewModal.style'

const OrderReviewModal = ({
  isShown,
  closeModal,
  sendOrder,
  purchasingList,
}) => {
  return (
    <Modal isShown={isShown} closeModal={closeModal}>
      <div css={orderReviewModalStyle.wrapper}>
        <Typography variant="title" mb={16} mt={16} textAlign="center">
          Purchasing List
        </Typography>

        <div css={orderReviewModalStyle.listItem}>
          <Typography variant="heading" mb={16}>
            Name
          </Typography>

          <Typography variant="heading" mb={16}>
            Qty
          </Typography>
        </div>

        {purchasingList.map((item, idx) => (
          <div key={`order-${idx}`} css={orderReviewModalStyle.listItem}>
            <Typography mb={8}>{item.title}</Typography>

            <Typography mb={8}>{item.amount}</Typography>
          </div>
        ))}

        <ButtonWrapper>
          <Button onClick={sendOrder}>Order</Button>
        </ButtonWrapper>
      </div>
    </Modal>
  )
}

OrderReviewModal.propTypes = {
  isShown: bool.isRequired,
  closeModal: func.isRequired,
  sendOrder: func.isRequired,
  purchasingList: arrayOf(shape({ id: string, title: string, amount: number })),
}

export default OrderReviewModal
