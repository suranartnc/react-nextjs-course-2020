import React from 'react'
import Link from '@link'
import colors from '@features/_ui/colors'

const mainMenus = [
  {
    name: 'Home',
    route: 'home',
  },
  {
    name: 'Search',
    route: 'about',
  },
  {
    name: 'My Collections',
    route: 'account',
  },
]

export default function Navigation() {
  return (
    <nav
      css={{
        backgroundColor: colors.background.dark,
        paddingTop: '60px',
        height: '100%',
        minHeight: '100vh',
      }}>
      {mainMenus.map(menu => (
        <Link key={menu.name} route={menu.route}>
          <a
            css={{
              display: 'block',
              padding: '15px 15px 15px 50px',
            }}>
            {menu.name}
          </a>
        </Link>
      ))}
    </nav>
  )
}
