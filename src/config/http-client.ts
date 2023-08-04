import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1'
})
