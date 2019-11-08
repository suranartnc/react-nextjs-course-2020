import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Link from '@link'
import colors from '@features/_ui/colors'
import { getStatic } from '@lib/static'

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
        position: 'fixed',
        top: 0,
        bottom: '100%',
        left: 0,
        backgroundColor: colors.background.dark,
        paddingTop: '25px',
        width: '230px',
        minHeight: '100vh',
      }}>
      <div css={{ padding: '0 0 20px 25px' }}>
        <Link route="home">
          <a>
            <img
              src={getStatic('/images/Spotify_Logo_White.png')}
              alt="home"
              css={{ width: '130px' }}
            />
          </a>
        </Link>
      </div>

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
