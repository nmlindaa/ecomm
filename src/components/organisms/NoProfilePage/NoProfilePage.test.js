import { render } from '@testing-library/react'
import NoProfilePage from './NoProfilePage'
import WARNING_MESSAGE from './warningMessage.json'

describe('Message Info', () => {
  it('display messages', () => {
    const { getByText } = render(<NoProfilePage />)

    WARNING_MESSAGE.forEach((msg) => {
      expect(getByText(msg)).toBeInTheDocument()
    })
    const actionButton = getByText('Back to homepage')
    expect(actionButton).toBeInTheDocument()
  })
})
