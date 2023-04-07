/** @jsxImportSource @emotion/react */

import Button from 'components/atoms/Button'
import { useContext, useState } from 'react'
import { ProfileCtx } from 'utils/providers/ProfileProvider'
import { homeStyle } from './Home.style'
import ProfileModal from './ProfileModal'

const HomePage = () => {
  const { state } = useContext(ProfileCtx)

  const list = [
    { label: 'Name', value: state.profile.name },
    { label: 'Email', value: state.profile.email },
    { label: 'Phone', value: state.profile.phone },
    { label: 'Address', value: state.profile.address },
  ]
  const [showModal, toggleShowModal] = useState(false)

  const saveProfile = (profile) => {
    updateState({
      ...state,
      profile,
    })
    const data = {
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
    }
    localStorage.setItem('name', profile.name)
    localStorage.setItem('profile', JSON.stringify(data))
    toggleShowModal(false)
  }

  return (
    <div css={homeStyle.wrapper}>
      {list.map((item, idx) => (
        <div key={`list-${idx}`} css={homeStyle.item}>
          <strong>{item.label}:</strong> {item.value || '-'}
        </div>
      ))}

      <div css={homeStyle.button}>
        <Button onClick={() => toggleShowModal(true)}>
          Complete your profile
        </Button>
      </div>

      <ProfileModal
        showModal={showModal}
        closeModal={() => toggleShowModal(false)}
        saveProfile={(data) => saveProfile(data)}
      />
    </div>
  )
}

export default HomePage
