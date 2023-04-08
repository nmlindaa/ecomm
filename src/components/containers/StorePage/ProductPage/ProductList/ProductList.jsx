/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { node } from 'prop-types'

const ProductList = ({ children }) => {
  return (
    <div
      css={css({
        padding: '24px 8px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      })}
    >
      {children}
    </div>
  )
}

ProductList.propTypes = {
  children: node,
}

export default ProductList
