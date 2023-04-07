import { render } from '@testing-library/react'
import { useLocation } from 'react-router-dom'
import Layout from './Layout'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}))

describe('renders menu items', () => {
  useLocation.mockReturnValueOnce({ pathname: '/' })

  const { getByText } = render(
    <Layout>
      <h1>Welcome</h1>
    </Layout>
  )

  it('display children', () => {
    expect(getByText('Welcome')).toBeInTheDocument()
  })
})
