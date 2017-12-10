
import axios from 'axios'

const api = axios.create()
api.defaults.baseURL = '' // 'http://api.com'
api.defaults.timeout = 5000
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// 添加请求拦截器
api.interceptors.request.use(function (config) {
  // 在发送请求之前做某事
  return config
}
, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
}
)

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做些事
  return response
}
, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
}

)
export default api
