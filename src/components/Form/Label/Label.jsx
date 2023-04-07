/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { string } from 'prop-types'

const Label = ({ name, label }) => {
  return (
    <label
      htmlFor={name}
      css={css({
        fontSize: '14px',
        display: 'block',
        fontWeight: '600',
        marginBottom: '4px',
      })}
    >
      {label}
    </label>
  )
}

Label.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
}

export default Label
