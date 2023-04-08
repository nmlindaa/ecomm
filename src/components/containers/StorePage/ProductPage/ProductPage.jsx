import LoadingScreen from 'components/atoms/LoadingScreen/LoadingScreen'
import MessageInfo from 'components/atoms/MessageInfo'
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

  const list = products.map((item) => ({
    id: item.episode_id.toString(),
    title: item.title,
  }))

  useEffect(() => {
    asyncStatus === 'idle' && getProduct()
  }, [])

  if (asyncStatus === 'idle' || asyncStatus === 'pending') {
    return <LoadingScreen />
  }
  if (asyncStatus === 'failed') {
    return (
      <MessageInfo
        messages={[
          'Ooops',
          'There might be a problem to show the products.',
          'Please try again.',
        ]}
        actionLabel="Try again"
        action={() => getProduct()}
      />
    )
  }
  return <ProductList list={list} />
}

export default ProductPage
