import { render } from '@testing-library/react'
import Typography from './Typography'

const props = {
  children: 'Some text',
}

describe('Typography', () => {
  it('display children', () => {
    const { getByText } = render(<Typography>{props.children}</Typography>)
    const children = getByText(props.children)

    expect(children).toBeInTheDocument()
  })
})
