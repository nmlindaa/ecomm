import StorePage from 'components/containers/StorePage'
import Layout from 'components/Layout'
import { useContext } from 'react'
import { ProfileCtx } from 'utils/providers/ProfileProvider'

const Store = () => {
  const { isProfileUncompleted } = useContext(ProfileCtx)

  return (
    <Layout>
      <StorePage showProduct={!isProfileUncompleted()} />
    </Layout>
  )
}

export default Store
