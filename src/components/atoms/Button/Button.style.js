import { css } from '@emotion/react'

export const buttonStyle = (variant, isFullWidth, kind) =>
  css({
    width: isFullWidth ? '100%' : 'auto',
    padding: kind === 'medium' ? '12px 48px' : '8px 12px',
    fontSize: kind === 'medium' ? '16px' : '14px',
    fontWeight: 'bold',
    backgroundColor: variant === 'primary' ? '#205A52' : '#FFFFFF',
    borderRadius: '50px',
    border: variant === 'primary' ? '1px solid #205A52' : '1px solid #000000',
    color: variant === 'primary' ? '#FFFFFF' : '#000000',
    cursor: 'pointer',
    ':disabled': {
      color: '#A1A1A8',
      borderColor: '#EFF0F3',
      backgroundColor: '#EFF0F3',
    },
  })
