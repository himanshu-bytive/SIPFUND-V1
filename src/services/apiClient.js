class ApiClient {
  baseUrl

  constructor(options) {
    this.baseUrl = options.baseUrl;
  }
  post(endpoint, params, headers = null) {
    return this.requestHttp('POST', this.baseUrl + endpoint, params, headers);
  }

  get(endpoint, params, headers = null) {
    return this.requestHttp('GET', this.baseUrl + endpoint, null, headers);
  }

  put(endpoint, params, headers = null) {
    return this.requestHttp('PUT', this.baseUrl + endpoint, params, headers);
  }

  patch(endpoint, params, headers = null) {
    return this.requestHttp('PATCH', this.baseUrl + endpoint, params, headers);
  }

  delete(endpoint, params, headers = null) {
    return this.requestHttp('DELETE', this.baseUrl + endpoint, params, headers);
  }

  requestHttp(method, url, params, headers) {
    return new Promise((resolve, reject) => {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow'
      };
      if (params) {
        options.body = JSON.stringify(params);
      }
      if (headers && headers.token) {
        options.headers.authorization = `${headers.token}`;
      }
      fetch(url, options)
        .then((response) => {
          response
            .text()
            .then((body) => {
              console.log('body ', body)
              resolve({ statusCode: response.status, body });
            })
            .catch((error) => {
              reject({ error: true, message: JSON.stringify(error) });
            });
        })
        .catch((error) => {
          reject({ error: true, message: JSON.stringify(error) });
        });
    });
  }
}

export default ApiClient;