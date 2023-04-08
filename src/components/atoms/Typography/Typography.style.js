import { css } from '@emotion/react'

export const typographyBaseStyle = (
  textAlign,
  color,
  fontSize,
  fontWeight,
  mb,
  mt,
  mr,
  ml
) =>
  css({
    textAlign,
    lineHeight: 1.5,
    fontStyle: 'normal',
    color,
    fontSize: `${fontSize}px`,
    fontWeight,
    marginBottom: `${mb}px`,
    marginTop: `${mt}px`,
    marginRight: `${mr}px`,
    marginLeft: `${ml}px`,
  })

export const typographyVariantStyle = {
  title: css({
    fontSize: '20px',
    fontWeight: 700,
    color: '#121315',
  }),
  heading: css({
    fontSize: '16px',
    fontWeight: 600,
    color: '#1D2022',
  }),
  body: css({
    fontSize: '16px',
    fontWeight: 400,
  }),
  paragraph: css({
    fontSize: '14px',
    fontWeight: 400,
  }),
  note: css({
    fontSize: '12px',
    fontWeight: 400,
  }),
}
