/** @jsxImportSource @emotion/react */
import { MENU_NAV } from 'utils/constants/menuNav'
import { navbarStyle } from './Navbar.style'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const { pathname } = location
  return (
    <header css={navbarStyle.self}>
      <div css={navbarStyle.wrapper}>
        {MENU_NAV.map((menu, idx) => {
          const handleClick = (e) => {
            if (menu.handleUrl) {
              menu.handleUrl()
              e.preventDefault()
            }
          }
          let Wrapper = 'div'
          let href = {}
          if (menu.url) {
            Wrapper = 'a'
            href = { href: menu.url }
          }
          return (
            <Wrapper
              key={`menu${idx}`}
              onClick={handleClick}
              css={[
                navbarStyle.item,
                idx === MENU_NAV.length - 1 && navbarStyle.lastItem,
                pathname === menu.url && navbarStyle.itemActive,
              ]}
              {...href}
            >
              {menu.label}
            </Wrapper>
          )
        })}
      </div>
    </header>
  )
}

export default Navbar
