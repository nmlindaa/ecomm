/** @jsxImportSource @emotion/react */

import { modalStyle } from './Modal.style'
import closeIcon from 'icons/cancel.png'
import { bool, func, node } from 'prop-types'

const Modal = ({ children, isShown = false, closeModal }) => {
  return (
    <div
      data-testid="modal"
      css={[modalStyle.wrapper, modalStyle.display(isShown)]}
    >
      <div css={modalStyle.container}>
        <img
          css={modalStyle.closeIcon}
          onClick={closeModal}
          src={closeIcon}
          alt="close modal icon"
        />
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: node.isRequired,
  isShown: bool,
  closeModal: func.isRequired,
}

export default Modal
