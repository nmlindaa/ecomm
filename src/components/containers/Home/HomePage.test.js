import { act, fireEvent, render } from '@testing-library/react'
import { ProfileCtx } from 'utils/providers/ProfileProvider'
import HomePage from './HomePage'

const state = {
  profile: {
    name: 'John',
    email: 'john@gmail.com',
    phone: '62847463772',
    address: 'Chicago',
  },
  isLoggedIn: true,
  status: 'completed',
}

const list = [
  { label: 'Name', value: state.profile.name },
  { label: 'Email', value: state.profile.email },
  { label: 'Phone', value: state.profile.phone },
  { label: 'Address', value: state.profile.address },
]

const updateState = () => jest.fn()

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('show profile', () => {
    const { getByText } = render(
      <ProfileCtx.Provider value={{ state, updateState }}>
        <HomePage list={list} />
      </ProfileCtx.Provider>
    )

    list.forEach((item) => {
      expect(getByText(`${item.label}:`)).toBeInTheDocument()
      item.value && expect(getByText(item.value)).toBeInTheDocument()
    })
  })

  it('show modal', async () => {
    const {
      getByText,
      getByTestId,
      getByAltText,
      getByPlaceholderText,
      getByRole,
    } = render(
      <ProfileCtx.Provider value={{ state, updateState }}>
        <HomePage list={list} />
      </ProfileCtx.Provider>
    )

    const updateButton = getByText(/Complete your profile/)
    expect(updateButton).toBeInTheDocument()

    const modal = getByTestId('modal')

    expect(modal).toBeInTheDocument()
    expect(modal).toHaveStyle('display: none')

    // show modal
    fireEvent.click(updateButton)
    expect(modal).toHaveStyle('display: block')

    // close modal
    fireEvent.click(getByAltText('close modal icon'))
    expect(modal).toHaveStyle('display: none')

    // show modal

    fireEvent.click(updateButton)
    fireEvent.change(getByPlaceholderText(/Name/), {
      target: { value: 'John Doe' },
    })
    await act(async () => {
      fireEvent.click(getByRole('button', { name: /save/i }))
    })
  })
})
