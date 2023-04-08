import { bool } from 'prop-types'
import NoProfilePage from 'components/organisms/NoProfilePage'
import CartList from './CartList'

const CartPage = ({ showCart = false }) => {
  return showCart ? <CartList /> : <NoProfilePage />
}

CartPage.propTypes = {
  showCart: bool,
}

export default CartPage
