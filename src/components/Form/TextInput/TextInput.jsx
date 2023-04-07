/** @jsxImportSource @emotion/react */

import { func, object, string } from 'prop-types'
import { forwardRef } from 'react'
import { colorStyle, textInputStyle } from './TextInput.style'

// eslint-disable-next-line react/display-name
const TextInput = forwardRef(({ onChange, name, errors, ...props }, ref) => {
  const theme = errors ? 'error' : 'basic'
  return (
    <input
      type="text"
      autoComplete={name}
      css={[textInputStyle, colorStyle[theme]]}
      name={name}
      ref={ref}
      onChange={onChange}
      {...props}
    />
  )
})

TextInput.propTypes = {
  name: string,
  errors: object,
  onChange: func.isRequired,
}

export default TextInput
