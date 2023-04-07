import { css } from '@emotion/react'

export const passwordInputStyle = {
  wrapper: css({
    position: 'relative',
  }),

  input: css({
    paddingRight: '72px',
  }),

  toggle: css({
    position: 'absolute',
    right: '16px',
    top: '16px',
    fontSize: '14px',
    color: 'darkslategray',
  }),

  icon: css({
    width: '20px',
    height: '20px',
  }),
}
