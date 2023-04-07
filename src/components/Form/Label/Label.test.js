import { render, screen } from '@testing-library/react'
import Label from './Label'

test('renders Label with text', () => {
  render(<Label name="username" label="Username" />)
  const labelElement = screen.getByText(/Username/)
  expect(labelElement).toBeInTheDocument()
})
