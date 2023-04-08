import MessageInfo from 'components/atoms/MessageInfo'

const NoPage = () => {
  return (
    <MessageInfo
      messages={[
        'Oops!',
        "The page you're looking for cannot be found.",
        'Please check the link or go to homepage.',
      ]}
      action={() => () => (location.href = '/')}
      actionLabel="Back to homepage"
    />
  )
}

export default NoPage
