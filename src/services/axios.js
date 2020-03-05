import axios from 'axios'

const service = axios.create({
    baseURL: 'https://adc-spotify-api.herokuapp.com',
    mode: 'cors',
    credetials: 'same-origin',
    timeout: 20000
})

export default service