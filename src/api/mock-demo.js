import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088/taskCenter'

export function queryAll() {
  return axios.get('/chart/countor')
}
