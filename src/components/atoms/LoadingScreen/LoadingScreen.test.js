import { render } from '@testing-library/react'
import LoadingScreen from './LoadingScreen'

describe('Loading Screen', () => {
  it('display spinner and message text', () => {
    const { getByTestId, getByText } = render(<LoadingScreen />)

    expect(getByTestId('spinner')).toBeInTheDocument()
    expect(getByText(/Please wait.../)).toBeInTheDocument()
  })
})
