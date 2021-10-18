import { Platform, Alert } from 'react-native';
import Config from '../common/Config';
import ApiClient from './apiClient';

const Api = new ApiClient({
  baseUrl: Config.apiBaseUrl,
});

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
    const split = file.uri.split('/')
    const fileName = split[split.length - 1]
    const formdata = new FormData();
    formdata.append("document", {
      name: fileName,
      type: file.type,
      uri: Platform.OS === "android" ? file.uri : file.uri.replace("file://", "")
    }, fileName);
    return fetch(Config.apiBaseUrl + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      },
      body: formdata
    })
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .catch(error => {
        return { error: true, message: error }
      });
  },
};

export default SiteApis;
