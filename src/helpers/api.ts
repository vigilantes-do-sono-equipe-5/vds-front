import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://vds-back-production.up.railway.app'
})
