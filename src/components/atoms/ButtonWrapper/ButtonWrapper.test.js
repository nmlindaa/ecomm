import { render } from '@testing-library/react'
import ButtonWrapper from './ButtonWrapper'

const props = {
  children: 'Click',
}

describe('ButtonWrapper', () => {
  it('display children', () => {
    const { getByText } = render(
      <ButtonWrapper>{props.children}</ButtonWrapper>
    )
    const children = getByText(props.children)

    expect(children).toBeInTheDocument()
  })
})
