import { bool } from 'prop-types'
import NoProfilePage from 'components/organisms/NoProfilePage'
import ProductPage from './ProductPage'

const StorePage = ({ showProduct = false }) => {
  return showProduct ? <ProductPage /> : <NoProfilePage />
}

StorePage.propTypes = {
  showProduct: bool,
}

export default StorePage
