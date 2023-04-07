import { css } from '@emotion/react'

export const modalStyle = {
  wrapper: css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 10, 0.4)',
    zIndex: 99,
  }),

  display: (isShown) =>
    css({
      display: isShown ? 'block' : 'none',
    }),

  container: css({
    position: 'fixed',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: 97,
    minWidth: '300px',
    padding: '16px',
    borderRadius: '10px',
    overflow: 'hidden auto',
    backgroundColor: '#ffffff',
  }),

  closeIcon: css({
    position: 'fixed',
    top: '16px',
    right: '16px',
    width: '24px',
    height: '24px',
    zIndex: 98,
  }),
}
