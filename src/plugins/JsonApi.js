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
  api: window.location.origin + (window.location.hostname === 'localhost' ? '/static/api/' : '/api/'),

  // .txt || .php || ''
  apiext: (window.location.hostname === 'localhost' ? '.txt' : '.php')
}

let JsonApi = {}

JsonApi.install = function (Vue, options) {
  Vue.prototype.$api = function (page, data, callback) {
    // Set API Address
    let apiurl = server.api + page + server.apiext;
    console.log(apiurl)

    // Request Data
    // Use get when posting to localhost
    // localhost only serves txt files
    if (server.host === 'localhost') {
      this.$http.get(apiurl)
      .then((response) => { return response.json() }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with request.', response.body]}) }) })
      .then((json) => { return new Promise(function (resolve, reject) { resolve(json) }) }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with json.', response]}) }) })
      .then((data) => {
        callback(data)
      })
    } else {
      this.$http.post(apiurl, data)
      .then((response) => { return response.json() }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with request.', response.body]}) }) })
      .then((json) => { return new Promise(function (resolve, reject) { resolve(json) }) }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with json.', response]}) }) })
      .then((data) => {
        callback(data)
      })
    }
  }
}

export default JsonApi
