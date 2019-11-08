import React from 'react'
import { Flex, Box } from '@grid'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Link from '@link'
import colors from '@features/_ui/colors'
import { getStatic } from '@lib/static'
import { useMember } from '@lib/auth'

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
  const { profile } = useMember()

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
      <div
        css={{
          height: 'calc(100% - 115px)',
          position: 'relative',
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

        <div>
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
        </div>

        <div
          css={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            textAlign: 'center',
          }}>
          <Flex
            flexWrap="wrap"
            justifyContent="space-around"
            alignItems="center"
            css={{
              width: '185px',
              margin: '0 auto',
              padding: '6px 0',
              borderTop: `1px solid ${colors.background.light}`,
              fontSize: '0.85em',
              fontWeight: 'bold',
              color: colors.link,
            }}>
            <Box>
              <Link route="account">
                <div
                  css={{
                    width: '30px',
                    height: '30px',
                    background: colors.background.light,
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}>
                  &nbsp;
                </div>
              </Link>
            </Box>
            <Box>
              <Link route="account">
                <a>{profile.name}</a>
              </Link>
            </Box>
          </Flex>
        </div>
      </div>
    </nav>
  )
}
