let server = {
  // localhost || www.example.com
  host: window.location.hostname,

  // http: || https:
  protocol: window.location.protocol,

  // http://localhost || http://www.example.com
  origin: window.location.origin,

  // /xyz || / || /asdf/werwer
  path: window.location.pathname,

  // /static/api/ || /api/
  api: window.location.origin + '/static/api/', // (window.location.hostname === 'localhost' ? '/static/api/' : '/api/'),

  // .txt || .php || ''
  apiext: '.txt' // (window.location.hostname === 'localhost' ? '.txt' : '.php')
}

let JsonApi = {}

JsonApi.install = function (Vue, options) {
  Vue.prototype.$apiget = function (page, query, callback) {
    // Set API Address
    let apiurl = server.api + // http://localhost/static/api/
      page + // page
      server.apiext + // .txt
      (query.length > 0 ? '?' + query.join('&') : '') // /query
    console.log(apiurl)

    // Request Data
    this.$http.get(apiurl)
      .then((response) => { return response.json() }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with request.', response.body]}) }) })
      .then((json) => { return new Promise(function (resolve, reject) { resolve(json) }) }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with json.', response]}) }) })
      .then((data) => {
        callback(data)
      })
  }

  Vue.prototype.$apipost = function (page, data, callback) {
    // Set API Address
    let apiurl = server.api + // http://localhost/static/api/
      page + // page
      server.apiext // .txt
    console.log(apiurl)

    // Request Data
    // this.$http.post(apiurl, data)
    this.$http.get(apiurl)
      .then((response) => { return response.json() }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with request.', response.body]}) }) })
      .then((json) => { return new Promise(function (resolve, reject) { resolve(json) }) }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with json.', response]}) }) })
      .then((data) => {
        callback(data)
      })
  }
}

export default JsonApi
