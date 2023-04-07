import { fireEvent, render } from '@testing-library/react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}))

const list = [
  { label: 'Home', url: '/' },
  { label: 'Logout', handleUrl: jest.fn() },
]

describe('Navbar', () => {
  useLocation.mockReturnValueOnce({ pathname: '/' })

  const { getByText } = render(<Navbar list={list} />)

  it('display menu items', () => {
    list.forEach((item) => {
      const element = getByText(item.label)
      expect(element).toBeInTheDocument()

      fireEvent.click(element)
      item.handleUrl && expect(item.handleUrl).toBeCalledTimes(1)
      item.url && expect(element).toHaveAttribute('href', item.url)
    })
  })
})
