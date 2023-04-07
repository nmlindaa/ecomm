import { fireEvent, render, screen } from '@testing-library/react'
import PasswordInput from './PasswordInput'

describe('Password Input', () => {
  it('display placeholder and change input value', () => {
    render(
      <PasswordInput
        name="password"
        placeholder="Enter password"
        onChange={() => jest.fn()}
      />
    )

    const inputElement = screen.getByPlaceholderText(/Enter password/)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveStyle('border: 1px solid gray')

    fireEvent.change(inputElement, { target: { value: 'secret' } })

    expect(inputElement).toHaveValue('secret')
  })

  it('toggle visibility of value', () => {
    const { getByAltText } = render(
      <PasswordInput
        name="password"
        placeholder="Enter password"
        onChange={() => jest.fn()}
      />
    )

    const toggleButton = getByAltText('toggle icon')

    const passwordInput = screen.getByPlaceholderText(/Enter password/)

    // Simulate user input by changing the password value
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } })

    fireEvent.click(toggleButton)

    // Assert that the password input is now showing the password
    expect(passwordInput.type).toBe('text')

    // Simulate clicking the toggle button again to hide the password
    fireEvent.click(toggleButton)

    // Assert that the password input is now hiding the password
    expect(passwordInput.type).toBe('password')
  })

  it('show error theme', () => {
    render(
      <PasswordInput
        name="password"
        placeholder="Enter password"
        onChange={() => jest.fn()}
        errors={{ message: 'invalid' }}
      />
    )

    const inputElement = screen.getByPlaceholderText(/Enter password/)
    expect(inputElement).toHaveStyle('border: 1px solid #A42828')
  })
})
