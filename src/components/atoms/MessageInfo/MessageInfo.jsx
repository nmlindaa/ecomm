/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from 'components/atoms/Button'
import { arrayOf, func, string } from 'prop-types'
import Typography from '../Typography'

const MessageInfo = ({ messages, actionLabel, action }) => {
  return (
    <div
      css={css({
        padding: '24px',
        textAlign: 'center',
      })}
    >
      {messages.map((msg, idx) => (
        <Typography
          key={`msg-${idx}`}
          variant={idx === 0 ? 'heading' : 'paragraph'}
          mb={idx === 0 ? 8 : 0}
          textAlign="center"
        >
          {msg}
        </Typography>
      ))}
      {action && actionLabel && (
        <div css={css({ marginTop: '40px' })}>
          <Button onClick={action}>{actionLabel}</Button>
        </div>
      )}
    </div>
  )
}

MessageInfo.propTypes = {
  messages: arrayOf(string).isRequired,
  action: func,
  actionLabel: string,
}

export default MessageInfo
