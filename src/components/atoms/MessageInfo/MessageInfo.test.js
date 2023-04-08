import { fireEvent, render } from '@testing-library/react'
import MessageInfo from './MessageInfo'

const props = {
  messages: ['Welcome back!', 'Find your dream products here'],
  action: jest.fn(),
  actionLabel: 'Click',
}

describe('Message Info', () => {
  it('display messages', () => {
    const { getByText } = render(<MessageInfo messages={props.messages} />)

    props.messages.forEach((msg) => {
      expect(getByText(msg)).toBeInTheDocument()
    })
  })
  it('display action label and execute action', () => {
    const { getByText } = render(<MessageInfo {...props} />)

    const actionButton = getByText(props.actionLabel)
    expect(actionButton).toBeInTheDocument()
    fireEvent.click(getByText(props.actionLabel))
    expect(props.action).toBeCalledTimes(1)
  })
})
