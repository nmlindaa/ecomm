import { render } from '@testing-library/react'
import { MENU_NAV } from 'utils/constants/menuNav'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}))

describe('renders menu items', () => {
  useLocation.mockReturnValueOnce({ pathname: '/' })

  const { getByText } = render(<Navbar />)

  it('display item label', () => {
    MENU_NAV.forEach((item) =>
      expect(getByText(item.label)).toBeInTheDocument()
    )
  })
})
