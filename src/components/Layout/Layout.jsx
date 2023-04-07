/** @jsxImportSource @emotion/react */
import Navbar from 'components/organisms/Navbar'
import { MENU_NAV } from 'utils/constants/menuNav'
import { layoutStyle } from './Layout.style'

const Layout = ({ children }) => {
  return (
    <div css={layoutStyle.self}>
      <div css={layoutStyle.wrapper}>
        <Navbar list={MENU_NAV} />
        <div css={layoutStyle.content}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
