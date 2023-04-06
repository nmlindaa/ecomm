import { css } from '@emotion/react'

export const layoutStyle = {
  self: css({
    backgroundColor: '#f7f7f7',
  }),

  wrapper: css({
    position: 'relative',
    maxWidth: '480px',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: '#ffffff',
  }),

  content: css({
    top: '64px',
    padding: '0 0 78px',
  }),
}
