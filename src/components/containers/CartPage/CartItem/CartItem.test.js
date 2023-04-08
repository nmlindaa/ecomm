import { fireEvent, render } from '@testing-library/react'
import CartItem from './CartItem'

const handleChange = jest.fn()
const props = {
  id: '1',
  title: 'Product',
  amount: 1,
}

describe('Cart Item', () => {
  it('display title, amount, and counter', () => {
    const { getByText, getByTestId } = render(
      <CartItem changeAmount={handleChange} {...props} />
    )

    expect(getByTestId(`product-img-${props.id}`)).toBeInTheDocument()
    expect(getByText(props.title)).toBeInTheDocument()
    expect(getByText(props.amount)).toBeInTheDocument()
    expect(getByText('+')).toBeInTheDocument()
    expect(getByText('-')).toBeInTheDocument()
  })
  describe('execute counter of amount', () => {
    it('add amount', () => {
      const { getByText } = render(
        <CartItem changeAmount={handleChange} {...props} />
      )

      const subButton = getByText('-')
      expect(subButton).toBeDisabled()

      const addButton = getByText('+')
      fireEvent.click(addButton)
      expect(handleChange).toBeCalledTimes(1)
      expect(getByText(props.amount + 1)).toBeInTheDocument()
      expect(subButton).toBeEnabled()
    })
    it('sub amount', () => {
      const newProps = { ...props, amount: 2 }
      const { getByText } = render(
        <CartItem changeAmount={handleChange} {...newProps} />
      )

      const subButton = getByText('-')
      fireEvent.click(subButton)
      expect(handleChange).toBeCalledTimes(1)
      expect(getByText(newProps.amount - 1)).toBeInTheDocument()
      expect(subButton).toBeDisabled()
    })
  })
})
