/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { func, shape, string } from 'prop-types'
import Label from '../Label'

const Field = ({ name, label, inputField, errors, ...props }) => {
  return (
    <div
      css={css({
        marginBottom: '16px',
      })}
    >
      <Label name={name} label={label} />

      {inputField({ name, errors, ...props })}

      {errors && (
        <div
          css={css({
            marginTop: '4px',
            color: '#D34B4B',
            fontSize: '14px',
          })}
        >
          {errors.message}
        </div>
      )}
    </div>
  )
}

Field.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  inputField: func.isRequired,
  errors: shape({
    message: string,
  }),
}

export default Field
