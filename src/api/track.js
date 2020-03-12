import request from '@/services/axios'

export function searchTrack (q, offset = 0) {
  return request({
    url: '/search',
    method: 'GET',
    params: {
      q,
      type: 'track',
      offset
    }
  })
}

export function getById (id) {
  return request({
    url: `/tracks/${id}`,
    method: 'GET'
  })
}

export function upload (file) {
  return request({
    url: '/tracks/',
    method: 'POST',
    upload: true,
    headers: {
      'Content-type': 'multipart/form-data'
    }
  })
}