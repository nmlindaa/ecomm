import { createContext, useEffect, useState } from 'react'

export const initState = {
  profile: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  isLoggedIn: false,
  status: 'idle',
}

export const ProfileCtx = createContext()

const ProfileProvider = ({ children }) => {
  const [state, setState] = useState(initState)

  const updateState = (newValue) => {
    setState(newValue)
  }

  useEffect(() => {
    if (state.status === 'idle') {
      const name = localStorage.getItem('name')
      const currentProfile = JSON.parse(localStorage.getItem('profile') || null)
      const profile = {
        ...state.profile,
        name: name || initState.profile.name,
        phone: currentProfile?.phone || initState.profile.phone,
        email: currentProfile?.email || initState.profile.email,
        address: currentProfile?.address || initState.profile.address,
      }
      updateState({
        status: 'completed',
        isLoggedIn: Boolean(name),
        profile: profile,
      })
    }
  }, [])

  return (
    <ProfileCtx.Provider value={{ state, updateState }}>
      {children}
    </ProfileCtx.Provider>
  )
}

export default ProfileProvider
