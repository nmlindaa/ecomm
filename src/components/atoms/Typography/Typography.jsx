/** @jsxImportSource @emotion/react */

import { node, number, oneOf, string } from 'prop-types'
import { typographyBaseStyle, typographyVariantStyle } from './Typography.style'

const Typography = ({
  children,
  textAlign = 'left',
  tagName = 'div',
  color = '#393C3F',
  variant = 'body',
  fontSize = 14,
  fontWeight = 400,
  mb = 0,
  mt = 0,
  ml = 0,
  mr = 0,
  ...otherProps
}) => {
  const Wrapper = tagName

  return (
    <Wrapper
      className="typography"
      css={[
        typographyBaseStyle(
          textAlign,
          color,
          fontSize,
          fontWeight,
          mb,
          mt,
          ml,
          mr
        ),
        typographyVariantStyle[variant],
      ]}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
}

Typography.propTypes = {
  children: node.isRequired,
  textAlign: oneOf(['center', 'left', 'right']),
  tagName: string,
  color: string,
  variant: oneOf(['title', 'heading', 'body', 'paragraph', 'info']),
  fontSize: oneOf([12, 14, 16, 18, 20, 24, 32]),
  fontWeight: oneOf([400, 600, 800]),
  mb: number,
  mt: number,
  ml: number,
  mr: number,
}

export default Typography
