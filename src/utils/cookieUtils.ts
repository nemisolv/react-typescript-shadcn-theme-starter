import cookie from 'js-cookie'

const accessTokenKey = 'myapp_access_token'
const refreshTokenKey = 'myapp_refresh_token'

const objCookie = {
    expires: 30,
    domain: 'localhost',  // change this to your domain
}

export const saveTokens = (accessToken: string, refreshToken: string) => {
    cookie.set(accessTokenKey, accessToken, objCookie)
    cookie.set(refreshTokenKey, refreshToken, objCookie)
}

export const getTokens = () => {
    const accessToken = cookie.get(accessTokenKey)
    const refreshToken = cookie.get(refreshTokenKey)
    return { accessToken, refreshToken }
}

export const removeTokens = () => {
    cookie.remove(accessTokenKey, {
        ...objCookie,
        domain: 'localhost',
        path: '/'
    })
    cookie.remove(refreshTokenKey, {
        ...objCookie,
        domain: 'localhost',
        path: '/'
    })
}
