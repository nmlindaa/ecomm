import { css, keyframes } from '@emotion/react'

export const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})

export const spinnerStyle = css({
  display: 'inline-block',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: '3px solid #fff',
  borderTopColor: '#1a202c',
  animation: `${spin} 1s ease-in-out infinite`,
})

export const containerStyle = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})
