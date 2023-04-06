/** @jsxImportSource @emotion/react */
import Navbar from 'components/Navbar'
import { layoutStyle } from './Layout.style'

const Layout = ({ children }) => {
  return (
    <div css={layoutStyle.self}>
      <div css={layoutStyle.wrapper}>
        <Navbar />
        <div css={layoutStyle.content}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
