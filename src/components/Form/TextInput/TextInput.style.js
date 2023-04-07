import { css } from '@emotion/react'

export const textInputStyle = css({
  fontSize: '16px',
  padding: '12px',
  lineHeight: 1.5,
  borderRadius: '4px',
  width: '-webkit-fill-available',
  ':focus-within': {
    outline: 'none',
  },
})

export const colorStyle = {
  basic: css({
    border: '1px solid gray',
    ':focus-within': {
      boxShadow: '0 2px 4px 0 gray',
    },
  }),
  error: css({
    border: '1px solid #A42828',
    ':focus-within': {
      boxShadow: '0 2px 4px 0 #D34B4B',
    },
  }),
}
