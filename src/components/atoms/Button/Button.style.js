import { css } from '@emotion/react'

export const buttonStyle = (variant, isFullWidth) =>
  css({
    width: isFullWidth ? '100%' : 'auto',
    padding: '12px 48px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: variant === 'primary' ? '#205A52' : '#FFFFFF',
    borderRadius: '50px',
    border: variant === 'primary' ? 'none' : '1px solid #000000',
    color: variant === 'primary' ? '#FFFFFF' : '#000000',
    cursor: 'pointer',
    ':disabled': {
      color: '#A1A1A8',
      border: 'none',
      backgroundColor: '#EFF0F3',
    },
  })
