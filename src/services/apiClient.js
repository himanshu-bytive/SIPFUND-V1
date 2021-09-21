import { Alert } from 'react-native';
const axios = require('axios');
class ApiClient {
  baseUrl

  constructor(options) {
    this.baseUrl = options.baseUrl;
  }
  post(endpoint, params, headers = null) {
    return this.requestHttp('post', this.baseUrl + endpoint, params, headers);
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
        url: url,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (params) {
        options.data = JSON.stringify(params);
      }
      if (headers && headers.token) {
        options.headers.authorization = `${headers.token}`;
      }
      axios(options)
        .then((response) => {
          resolve({ statusCode: response.status, body: response.data });
        })
        .catch((error) => {
          console.log('error ', error)
          reject({ error: true, message: 'error' });
        });
    });
  }
}

export default ApiClient;