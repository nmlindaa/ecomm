import { css } from '@emotion/react'

export const cartItemStyle = {
  wrapper: css({
    padding: '16px',
    display: 'flex',
  }),

  image: css({
    width: '96px',
    height: '96px',
    backgroundColor: '#5AC4B4',
    borderRadius: '10px',
    margin: '0',
  }),

  content: css({
    marginLeft: '16px',
    flexGrow: 1,
  }),

  counter: css({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    columnGap: '12px',
  }),
}
