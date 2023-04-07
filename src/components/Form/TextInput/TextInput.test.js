import { fireEvent, render, screen } from '@testing-library/react'
import TextInput from './TextInput'

describe('Text Input', () => {
  it('display placeholder and change input value', () => {
    render(
      <TextInput
        name="username"
        placeholder="Enter username"
        onChange={() => jest.fn()}
      />
    )

    const inputElement = screen.getByPlaceholderText(/Enter username/)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveStyle('border: 1px solid gray')

    fireEvent.change(inputElement, { target: { value: 'test input' } })

    expect(inputElement).toHaveValue('test input')
  })

  it('show error theme', () => {
    render(
      <TextInput
        name="username"
        placeholder="Enter username"
        onChange={() => jest.fn()}
        errors={{ message: 'invalid' }}
      />
    )

    const inputElement = screen.getByPlaceholderText(/Enter username/)
    expect(inputElement).toHaveStyle('border: 1px solid #A42828')
  })
})
