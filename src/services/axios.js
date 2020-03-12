import axios from 'axios'

const service = axios.create({
  baseURL: 'https://adc-spotify-api.herokuapp.com',
  mode: 'cors',
  credetials: 'same-origin',
  timeout: 20000
})

// interceptar la petición
service.interceptors.request.use(config => {

  // modoficar las cabeceras
  if (!config.upload) config.headers.post['Content-Type'] = 'application/json'

  // modificar cabeceras
  config.headers.Authorization = 'Bearer token'
  return config
})

// interceptar la respuesta
service.interceptors.response.use(res => {
  // errores del servidor
  // validar codigos de estado
  // modificar la respuesta
  return res.data
})

export default service
