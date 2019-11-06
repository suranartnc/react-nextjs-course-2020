const patterns = {
  slug: '[A-Za-z0-9-%_]+',
  id: '[A-Za-z0-9-%_]+',
}

const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },
  {
    pattern: `/album/:id(${patterns.id})`,
    name: 'album-detail',
    page: 'album-detail',
  },
  {
    pattern: '/search',
    name: 'search',
    page: 'search',
  },
  {
    pattern: '/login',
    name: 'login',
    page: 'login',
  },
  {
    pattern: '/playlists',
    name: 'playlist-list',
    page: 'playlist-list',
  },
  {
    pattern: `/playlist/:id(${patterns.id})`,
    name: 'playlist-detail',
    page: 'playlist-detail',
  },
  {
    pattern: '/account',
    name: 'account',
    page: 'account',
  },
]

module.exports = routes
