import { fireEvent, render } from '@testing-library/react'
import OrderSuccessModal, { MESSAGES } from './OrderSuccessModal'

describe('Order Success Modal', () => {
  it('renders message and execute close modal', () => {
    const handleClose = jest.fn()

    const { getByText, getByTestId, getByAltText } = render(
      <OrderSuccessModal isShown closeModal={handleClose} />
    )

    expect(getByTestId('modal')).toHaveStyle('display: block')
    MESSAGES.forEach((msg) => expect(getByText(msg)).toBeInTheDocument())

    const closeButton = getByAltText('close modal icon')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalled()
  })
})
