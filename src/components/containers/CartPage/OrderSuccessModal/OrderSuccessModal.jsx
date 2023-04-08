import MessageInfo from 'components/atoms/MessageInfo'
import Modal from 'components/atoms/Modal'
import { bool, func } from 'prop-types'

export const MESSAGES = [
  'Congratulations!',
  'Your purchase is successful.',
  'Thank you for shopping with us.',
]

const OrderSuccessModal = ({ isShown, closeModal }) => {
  return (
    <Modal isShown={isShown} closeModal={closeModal}>
      <MessageInfo messages={MESSAGES} />
    </Modal>
  )
}

OrderSuccessModal.propTypes = {
  isShown: bool.isRequired,
  closeModal: func.isRequired,
}

export default OrderSuccessModal
