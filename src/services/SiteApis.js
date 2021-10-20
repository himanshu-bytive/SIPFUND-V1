import { Platform, Alert } from 'react-native';
import Config from '../common/Config';
import ApiClient from './apiClient';

const Api = new ApiClient({
  baseUrl: Config.apiBaseUrl,
});

const getMimeType = (ext) => {
  switch (ext) {
    case 'pdf': return 'application/pdf';
    case 'jpg': return 'image/jpeg';
    case 'jpeg': return 'image/jpeg';
    case 'png': return 'image/png';
  }
}

const SiteApis = {
  apiPostCall: async (api, params, token) => {
    try {
      const response = await Api.post(api, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  apiPutCall: async (api, params, token) => {
    try {
      const response = await Api.put(api, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  apiGetCall: async (api, params, token) => {
    try {
      const response = await Api.get(api, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  uploadImgApi(url, file, token) {
    const fileUri = file.uri
    let filename = fileUri.split('/').pop();
    const extArr = /\.(\w+)$/.exec(filename);
    const type = getMimeType(extArr[1]);
    let formData = new FormData();
    formData.append('document', { uri: fileUri, name: filename, type }, filename);
    return fetch(Config.apiBaseUrl + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      },
      body: formData
    })
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .catch(error => {
        return { error: true, message: error }
      });
  },
};

export default SiteApis;
