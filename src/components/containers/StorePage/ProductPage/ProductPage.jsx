import LoadingScreen from 'components/atoms/LoadingScreen/LoadingScreen'
import { useEffect, useState } from 'react'
import ProductList from './ProductList'

const ProductPage = () => {
  const [asyncStatus, setAsyncStatus] = useState('idle')
  const [products, setProducts] = useState([])

  const getProduct = async () => {
    setAsyncStatus('pending')

    const url = 'https://swapi.dev/api/films/'
    fetch(url)
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

  const list = products.map((item) => ({
    id: item.episode_id.toString(),
    title: item.title,
  }))

  return <ProductList list={list} />
}

export default ProductPage
