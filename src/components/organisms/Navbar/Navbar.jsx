/** @jsxImportSource @emotion/react */

import { navbarStyle } from './Navbar.style'
import { useLocation } from 'react-router-dom'
import { arrayOf, func, shape, string } from 'prop-types'
import Typography from 'components/atoms/Typography'

const Navbar = ({ list }) => {
  const location = useLocation()
  const { pathname } = location
  return (
    <header css={navbarStyle.self}>
      <div css={navbarStyle.wrapper}>
        {list.map((menu, idx) => {
          const handleClick = (e) => {
            if (menu.handleUrl) {
              menu.handleUrl()
              e.preventDefault()
            }
          }
          let wrapper = 'div'
          let href = {}
          if (menu.url) {
            wrapper = 'a'
            href = { href: menu.url }
          }
          return (
            <Typography
              variant={pathname === menu.url ? 'heading' : 'body'}
              tagName={wrapper}
              key={`menu${idx}`}
              onClick={handleClick}
              css={[
                navbarStyle.item,
                idx === list.length - 1 && navbarStyle.lastItem,
              ]}
              {...href}
            >
              {menu.label}
            </Typography>
          )
        })}
      </div>
    </header>
  )
}

Navbar.propTypes = {
  list: arrayOf(
    shape({
      label: string.isRequired,
      url: string,
      handleUrl: func,
    })
  ).isRequired,
}

export default Navbar
