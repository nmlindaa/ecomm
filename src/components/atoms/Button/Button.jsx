/** @jsxImportSource @emotion/react */
import { bool, func, node, oneOf } from 'prop-types'
import { buttonStyle } from './Button.style'

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  isFullWidth = false,
}) => {
  return (
    <button
      css={buttonStyle(variant, isFullWidth)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: node.isRequired,
  onClick: func,
  type: oneOf(['submit', 'button', 'reset']),
  disabled: bool,
  variant: oneOf(['primary', 'secondary']),
  isFullWidth: bool,
}

export default Button
