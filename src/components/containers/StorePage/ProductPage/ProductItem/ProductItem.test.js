import { fireEvent, render } from '@testing-library/react'
import ProductItem from './ProductItem'

const props = {
  id: '1',
  title: 'Friends',
  isProductAdded: false,
  removeFromCart: jest.fn(),
  addToCart: jest.fn(),
}
describe('Product Item', () => {
  it('show title, image, and action button', () => {
    const { getByText, getByTestId } = render(<ProductItem {...props} />)

    expect(getByText(props.title)).toBeInTheDocument()
    expect(getByText(/Add/)).toBeInTheDocument()
    expect(getByTestId(`item-${props.id}`)).toBeInTheDocument()
  })

  describe('execute action button', () => {
    it('add to cart', () => {
      const { getByText } = render(<ProductItem {...props} />)
      const button = getByText(/Add/)

      fireEvent.click(button)
      expect(props.addToCart).toBeCalledTimes(1)
      expect(props.removeFromCart).not.toBeCalled()
    })
    it('remove from cart', () => {
      const newProps = { ...props, isProductAdded: true }
      const { getByText } = render(<ProductItem {...newProps} />)
      const button = getByText(/Remove/)

      fireEvent.click(button)
      expect(newProps.removeFromCart).toBeCalledTimes(1)
      expect(newProps.addToCart).not.toBeCalled()
    })
  })
})
