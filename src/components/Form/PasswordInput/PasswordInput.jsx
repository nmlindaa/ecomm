/** @jsxImportSource @emotion/react */

import { func, object, string } from 'prop-types'
import { forwardRef, useState } from 'react'
import { colorStyle, textInputStyle } from '../TextInput/TextInput.style'
import { passwordInputStyle } from './PasswordInput.style'
import showIcon from 'icons/show.png'
import hideIcon from 'icons/hide.png'

// eslint-disable-next-line react/display-name
const PasswordInput = forwardRef(
  ({ onChange, name, errors, ...props }, ref) => {
    const [showPassword, toggleShowPassword] = useState(false)
    const theme = errors ? 'error' : 'basic'

    return (
      <div css={passwordInputStyle.wrapper}>
        <input
          type={showPassword ? 'text' : 'password'}
          css={[textInputStyle, colorStyle[theme], passwordInputStyle.input]}
          name={name}
          ref={ref}
          onChange={onChange}
          {...props}
        />
        <span
          css={passwordInputStyle.toggle}
          onClick={() => toggleShowPassword(!showPassword)}
        >
          <img
            src={showPassword ? showIcon : hideIcon}
            alt="toggle icon"
            css={passwordInputStyle.icon}
          />
        </span>
      </div>
    )
  }
)

PasswordInput.propTypes = {
  name: string,
  errors: object,
  onChange: func.isRequired,
}

export default PasswordInput
