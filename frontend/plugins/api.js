export default function ({ $axios }, inject) {
  const api = new API($axios)
  inject('api', api)
}

class API {
  constructor (axios,baseURL) {
    this.baseURL = "http://localhost:3001"
    this.axios = axios
  }

  async postTest (request_data) {
    const res = await this.axios.$post(`${this.baseURL}/test`,{request_data:request_data})
    return res
  }
}
