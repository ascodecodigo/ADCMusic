import request from '@/services/auth'

export function login (email, password) {
  return request({
    url: '/auth/login',
    method: 'POST',
    data: {
      email,
      password
    }
  })
}
