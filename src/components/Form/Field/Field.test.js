import { fireEvent, render, screen } from '@testing-library/react'
import Field from './Field'

describe('Field', () => {
  it('display placeholder, value, and label', () => {
    render(
      <Field
        name="name"
        label="Name"
        placeholder="Enter name"
        onChange={() => jest.fn()}
        inputField={(props) => <input {...props} />}
      />
    )

    // show placeholder
    const inputElement = screen.getByPlaceholderText(/Enter name/)
    expect(inputElement).toBeInTheDocument()

    // show value
    fireEvent.change(inputElement, { target: { value: 'test input' } })

    expect(inputElement).toHaveValue('test input')

    // show label
    const labelElement = screen.getByText(/Name/)
    expect(labelElement).toBeInTheDocument()
  })
  it('display error message', () => {
    render(
      <Field
        name="name"
        label="Name"
        placeholder="Enter name"
        onChange={() => jest.fn()}
        errors={{ message: 'Invalid name' }}
        inputField={(props) => <input {...props} />}
      />
    )

    const errorMessageElement = screen.getByText(/Invalid name/)
    expect(errorMessageElement).toBeInTheDocument()
  })
})
