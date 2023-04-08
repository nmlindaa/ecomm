import { act, fireEvent, render } from '@testing-library/react'
import { ProfileCtx } from 'utils/providers/ProfileProvider'
import ProfileModal from './ProfileModal'
import {
  basicState as state,
  handleFunc,
  isProfileUncompleted,
} from 'utils/testUtils/Profile'

describe('Profile Modal', () => {
  it('renders title, modal, and form', () => {
    const handleClose = jest.fn()
    const handleSave = jest.fn()

    const { getByText, getByTestId } = render(
      <ProfileCtx.Provider
        value={{ state, updateState: handleFunc, isProfileUncompleted }}
      >
        <ProfileModal
          showModal
          closeModal={handleClose}
          saveProfile={handleSave}
        />
      </ProfileCtx.Provider>
    )

    expect(getByTestId('modal')).toHaveStyle('display: block')
    expect(getByText('Edit Profile')).toBeInTheDocument()
    expect(getByText(/Save/)).toBeInTheDocument()
    expect(getByText(/Reset/)).toBeInTheDocument()
  })

  it('execute save and reset', async () => {
    const handleClose = jest.fn()
    const handleSave = jest.fn()

    const { getByText, getByPlaceholderText } = render(
      <ProfileCtx.Provider
        value={{ state, updateState: handleFunc, isProfileUncompleted }}
      >
        <ProfileModal
          showModal
          closeModal={handleClose}
          saveProfile={handleSave}
        />
      </ProfileCtx.Provider>
    )

    const resetButton = getByText(/Reset/)
    expect(resetButton).toBeDisabled()

    fireEvent.input(getByPlaceholderText(/Name/), {
      target: { value: 'John Doe' },
    })

    expect(resetButton).toHaveAttribute('disabled', '')
    await act(async () => {
      fireEvent.click(resetButton)
    })
    expect(resetButton).not.toHaveAttribute('disabled', 'false')
  })
})
