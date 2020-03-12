import Cookies from 'js-cookies'

/**
 * Guardar el token como una cookie
 * @param {String} token 
 */
export function setToken (token) {
  return Cookies.setItem('Access-Token', token)
}

/**
 * Obtener el token de las cookies
 */
export function getToken () {
  return Cookies.getItem('Access-Token')
}
