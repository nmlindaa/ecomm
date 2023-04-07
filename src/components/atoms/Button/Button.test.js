import { fireEvent, render } from '@testing-library/react'
import Button from './Button'

const props = {
  children: 'Click',
  onClick: jest.fn(),
}

describe('Button', () => {
  it('display children', () => {
    const { getByRole } = render(<Button>{props.children}</Button>)
    const button = getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(props.children)
  })
  it('calls onClick handler when button is clicked', () => {
    const { getByRole } = render(
      <Button onClick={() => props.onClick()}>{props.children}</Button>
    )
    const button = getByRole('button')

    fireEvent.click(button)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
  it('not call onClick handler when disabled button is clicked', () => {
    const { getByRole } = render(
      <Button onClick={() => props.onClick()} disabled={true}>
        {props.children}
      </Button>
    )
    const button = getByRole('button')

    fireEvent.click(button)
    expect(props.onClick).not.toHaveBeenCalled()
  })
})
