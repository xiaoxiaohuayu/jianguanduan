import axios from 'axios';
axios.defaults.timeout = 5000; //请求超时5秒
axios.defaults.baseURL ='http://81.68.146.155/';  //请求base url
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //

//http request 拦截器
axios.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('token')
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers = {
        'X-token': token
      }
    }
    
    return config
  }, 
  err => {
    return Promise.reject(err)
  }
)
//请求返回时的拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 500) {
      console.log(response,'返回拦截')
      
      return false;
    }
    if (response.data.code === -1) {
      localStorage.removeItem('token')
    }
    return response
  }, 
  err => {
    if (err.code === '500' && err.message.indexOf('timeout') !== -1) {
      Toast({
          mes: '网络异常，连接超时...',
          timeout: 1500
      });
    }
    return Promise.reject(err)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params={}, headers={}){
    return new Promise((resolve, reject) => {
      axios.get(url,{
        params: params,
        headers: headers
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  /**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url, data = {}){
    return new Promise((resolve, reject) => {
       axios.post(url, data)
       .then(response => {
         resolve(response.data);
       }, err => {
         reject(err)
       })
    })
  }