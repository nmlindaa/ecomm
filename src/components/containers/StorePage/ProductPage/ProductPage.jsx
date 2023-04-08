import LoadingScreen from 'components/atoms/LoadingScreen/LoadingScreen'
import { useEffect, useState } from 'react'
import ProductItem from './ProductItem/ProductItem'
import ProductList from './ProductList'

const ProductPage = () => {
  const [asyncStatus, setAsyncStatus] = useState('idle')
  const [products, setProducts] = useState([])
  const getProduct = async () => {
    setAsyncStatus('pending')
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results)
        setAsyncStatus('completed')
      })
      .catch(() => {
        setProducts([])
        setAsyncStatus('failed')
      })
  }

  useEffect(() => {
    asyncStatus === 'idle' && getProduct()
  }, [])

  if (asyncStatus === 'idle' || asyncStatus === 'pending') {
    return <LoadingScreen />
  }
  if (asyncStatus === 'failed') {
    return <div>There might be a problem. Please report this error.</div>
  }

  return (
    <ProductList>
      {products.map((item, idx) => (
        <ProductItem
          key={`product-${idx}`}
          title={item.title}
          id={item.episode_id.toString()}
        />
      ))}
    </ProductList>
  )
}

export default ProductPage
