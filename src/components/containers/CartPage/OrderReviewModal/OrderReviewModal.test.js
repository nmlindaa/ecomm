import { fireEvent, render } from '@testing-library/react'
import OrderReviewModal from './OrderReviewModal'

const purchasingList = [
  { id: '1', title: 'Movie', amount: 2 },
  { id: '2', title: 'Serial', amount: 1 },
]

describe('Order Review Modal', () => {
  it('renders content and execute close modal', () => {
    const handleClose = jest.fn()
    const handleSendOrder = jest.fn()

    const { getByText, getByTestId, getByAltText } = render(
      <OrderReviewModal
        isShown
        closeModal={handleClose}
        sendOrder={handleSendOrder}
        purchasingList={purchasingList}
      />
    )

    expect(getByTestId('modal')).toHaveStyle('display: block')
    expect(getByText(/Purchasing List/)).toBeInTheDocument()
    expect(getByText(/Name/)).toBeInTheDocument()
    expect(getByText(/Qty/)).toBeInTheDocument()
    expect(getByText(/Order/)).toBeInTheDocument()

    purchasingList.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument()
      expect(getByText(item.amount)).toBeInTheDocument()
    })

    const closeButton = getByAltText('close modal icon')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('execute handle send order', () => {
    const handleClose = jest.fn()
    const handleSendOrder = jest.fn()

    const { getByText } = render(
      <OrderReviewModal
        isShown
        closeModal={handleClose}
        sendOrder={handleSendOrder}
        purchasingList={purchasingList}
      />
    )

    const orderButton = getByText('Order')
    fireEvent.click(orderButton)

    expect(handleSendOrder).toHaveBeenCalledTimes(1)
  })
})
