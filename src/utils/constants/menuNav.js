import { logout } from 'utils/logout'

export const MENU_NAV = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Store',
    url: '/store',
  },
  {
    label: 'Shopping Cart',
    url: '/cart',
  },
  {
    label: 'Logout',
    handleUrl: () => logout(),
  },
]
