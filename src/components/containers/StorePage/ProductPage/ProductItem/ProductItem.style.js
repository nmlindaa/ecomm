import { css } from '@emotion/react'

export const productItemStyle = {
  wrapper: css({
    display: 'flex',
    width: '40%',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '16px',
  }),

  image: css({
    width: '120px',
    height: '120px',
    backgroundColor: '#5AC4B4',
    borderRadius: '10px',
    margin: '0',
  }),

  item: css({
    margin: '12px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),

  title: css({
    display: 'flex',
    alignItems: 'center',
    margin: '8px 4px',
    height: '42px',
  }),
}
