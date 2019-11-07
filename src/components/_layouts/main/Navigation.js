import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Link from '@link'
import colors from '@features/_ui/colors'

const mainMenus = [
  {
    name: 'Home',
    route: 'home',
    icon: 'home',
  },
  {
    name: 'Search',
    route: 'search',
    icon: 'search',
  },
  {
    name: 'Playlists',
    route: 'playlist-list',
    icon: 'heart',
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
              padding: '15px 15px 15px 30px',
            }}>
            <Icon
              icon={menu.icon}
              css={{
                width: '20px',
                float: 'left',
                margin: '-2px 18px 5px 0px',
                color: colors.link,
              }}
            />
            {menu.name}
          </a>
        </Link>
      ))}
    </nav>
  )
}
