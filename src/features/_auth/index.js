import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useCookies } from 'react-cookie'

export const AUTH_COOKIE_NAME = 'nextweb-token'
export const AUTH_COOKIE_MAX_AGE = 60 * 60 // 1 hour

export function signIn() {
  const clientId = process.env.CLIENT_ID
  const redirectURI = process.env.REDIRECT_URI
  const scopes = 'user-read-private user-read-email playlist-read-private'

  const signinURL =
    'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' +
    clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' +
    encodeURIComponent(redirectURI)

  location.href = signinURL
}

export function signOut() {
  deleteCookie(AUTH_COOKIE_NAME)
  location.href = '/'
}

function deleteCookie(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export function useAuth() {
  const [token, setToken] = useState(null)
  const router = useRouter()
  const [cookies, setCookie] = useCookies([AUTH_COOKIE_NAME])

  useEffect(() => {
    let token = cookies[AUTH_COOKIE_NAME]

    if (!token) {
      const tokenFromURL = findTokenInAsPath(router.asPath)

      if (tokenFromURL) {
        const expires = Math.floor(Date.now() / 1000) + AUTH_COOKIE_MAX_AGE

        setCookie(AUTH_COOKIE_NAME, tokenFromURL, {
          path: '/',
          expires: new Date(expires * 1000),
        })
      }

      token = tokenFromURL
    }

    setToken(token)
  }, [])

  const userData = {
    isAuthenticated: token === null ? null : !!token,
    profile: {
      name: 'Suranart Niamcome',
    },
    token,
  }

  return userData
}

function findTokenInAsPath(asPath) {
  const parts = asPath.split('access_token=')

  if (parts.length === 2) {
    return parts[1].split('&token_type=')[0]
  }

  return false
}
