const patterns = {
  slug: '[A-Za-z0-9-%_]+',
  id: '[1-9][0-9]*',
}

const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },
]

module.exports = routes
