/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { node } from 'prop-types'

const ButtonWrapper = ({ children }) => {
  return (
    <div
      css={css({
        display: 'flex',
        columnGap: '16px',
        justifyContent: 'center',
        paddingTop: '16px',
      })}
    >
      {children}
    </div>
  )
}

ButtonWrapper.propTypes = {
  children: node.isRequired,
}

export default ButtonWrapper
