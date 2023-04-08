import { render, fireEvent } from '@testing-library/react'
import Modal from './Modal'

describe('Modal', () => {
  it('renders modal with content', () => {
    const content = 'This is the modal content'
    const handleClose = jest.fn()

    const { getByText, getByTestId } = render(
      <Modal isShown={true} closeModal={handleClose}>
        <p>{content}</p>
      </Modal>
    )

    const modal = getByText(content)
    expect(modal).toBeInTheDocument()
    expect(getByTestId('modal')).toHaveStyle('display: block')
  })

  it('renders hidden modal', () => {
    const content = 'This is the modal content'
    const handleClose = jest.fn()

    const { getByTestId } = render(
      <Modal isShown={false} closeModal={handleClose}>
        <p>{content}</p>
      </Modal>
    )

    const modal = getByTestId('modal')
    expect(modal).toBeInTheDocument()
    expect(modal).toHaveStyle('display: none')
  })

  it('calls closeModal handler when close button is clicked', () => {
    const handleClose = jest.fn()

    const { getByAltText } = render(
      <Modal closeModal={handleClose}>
        <p>This is the modal content</p>
      </Modal>
    )

    const closeButton = getByAltText('close modal icon')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalled()
  })
})
