import { initState } from 'utils/providers/CartProvider'

export const basicState = {
  profile: {
    ...initState.profile,
    name: 'John',
  },
  isLoggedIn: true,
  status: 'completed',
}

export const completedState = {
  profile: {
    name: 'John',
    email: 'john@gmail.com',
    phone: '62847463772',
    address: 'Chicago',
  },
  isLoggedIn: true,
  status: 'completed',
}

export const handleFunc = jest.fn()
export const isProfileUncompleted = true
