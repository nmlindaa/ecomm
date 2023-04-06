import { css } from '@emotion/react'

export const navbarStyle = {
  self: css({
    padding: '24px',
    borderBottom: '1px solid #dedede',
  }),

  wrapper: css({
    display: 'flex',
    columnGap: '24px',
  }),

  item: css({
    fontSize: '14px',
    color: '#000000',
    textDecoration: 'none',
  }),

  lastItem: css({
    flexGrow: 1,
    textAlign: 'right',
  }),

  itemActive: css({
    fontWeight: 'bold',
  }),
}
