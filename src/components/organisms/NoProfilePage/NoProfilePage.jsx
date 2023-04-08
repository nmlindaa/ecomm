import MessageInfo from 'components/atoms/MessageInfo'
import WARNING_MESSAGE from './warningMessage.json'

const NoProfilePage = () => {
  return (
    <MessageInfo
      messages={WARNING_MESSAGE}
      action={() => () => (location.href = '/')}
      actionLabel="Back to homepage"
    />
  )
}

export default NoProfilePage
