import { css } from '@emotion/react'

export const navbarStyle = {
  self: css({
    padding: '24px',
    borderBottom: '2px solid #dedede',
  }),

  wrapper: css({
    display: 'flex',
    columnGap: '24px',
  }),

  item: css({
    textDecoration: 'none',
  }),

  lastItem: css({
    flexGrow: 1,
    textAlign: 'right',
  }),
}
