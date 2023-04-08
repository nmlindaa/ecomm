import CartPage from 'components/containers/CartPage'
import Layout from 'components/Layout'
import { useContext } from 'react'
import { ProfileCtx } from 'utils/providers/ProfileProvider'

const Cart = () => {
  const { isProfileUncompleted } = useContext(ProfileCtx)

  return (
    <Layout>
      <CartPage showCart={!isProfileUncompleted()} />
    </Layout>
  )
}

export default Cart
