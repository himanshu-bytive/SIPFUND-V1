import { Platform, Alert } from 'react-native';
import Config from '../common/Config';
import ApiClient from './apiClient';
const axios = require('axios');

const Api = new ApiClient({
  baseUrl: Config.apiBaseUrl,
});

const SiteApis = {
  login: async params => {
    try {
      const response = await Api.post('/auth/verify', params);
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  otpValidate: async params => {
    try {
      const response = await Api.post('/auth/validate', params);
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  createAccount: async params => {
    try {
      const response = await Api.post('/auth/auth', params);
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  forgetPassword: async params => {
    try {
      const response = await Api.post('/forget_password', params);
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  loginWithSocial: async (params) => {
    try {
      const response = await Api.post('/sign_in_social', params);
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      console.log(err);
    }
  },
  logup: async params => {
    try {
      const response = await Api.post('/sign_up', params);
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  getDataApi: async (params, dbName, token) => {
    let newUrl = `${dbName}/?`
    for (let key of Object.keys(params)) {
      if (params[key]) {
        newUrl = newUrl + `${key}=${params[key]}&`
      }
    }
    try {
      const response = await Api.get(`/${newUrl}`, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  getSingleDataApi: async (params, dbName, token) => {
    try {
      const response = await Api.get(`/${dbName}/${params.id}`, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  addDataApi: async (params, dbName, token) => {
    try {
      const response = await Api.post(`/${dbName}`, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  editDataApi: async (params, dbName, token) => {
    try {
      const response = await Api.put(`/${dbName}/${params.id}`, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  deleteDataApi: async (params, dbName, token) => {
    try {
      const response = await Api.delete(`/${dbName}/${params.id}`, params, { token });
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw response.body;
      }
    } catch (err) {
      return err;
    }
  },
  uploadImgApi(file, token) {
    const data = new FormData();
    data.append("photo", {
      name: file.fileName,
      type: file.type,
      uri:
        Platform.OS === "android" ? file.uri : file.uri.replace("file://", "")
    });
    return fetch(Config.apiBaseUrl + `/files`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'multipart/form-data',
        'authorization': token
      },
      body: data
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return `${Config.uploadPath}/${responseJson.urlPath}`
        } else {
          return null
        }
      }).catch((error) => {
        console.log(error)
      });
  },
  getCatagoryes(data, type) {
    const tempData = {}
    for (let item of data) {
      if (item[type] in tempData) {
        tempData[item[type]].push(item)
      } else {
        tempData[item[type]] = []
        tempData[item[type]].push(item)
      }
    }
    return tempData
  },
  formatAddress(addressData) {
    let data = {}
    let address2 = ''
    for (let item of addressData) {
      for (let type of item.types) {
        if (type === 'premise') {
          address2 = address2 + (item.long_name ? item.long_name + ', ' : '')
        }
        else if (type === 'street_number') {
          address2 = address2 + (item.long_name ? item.long_name + ', ' : '')
        }
        else if (type === 'route') {
          address2 = address2 + (item.long_name ? item.long_name + ', ' : '')
        }
        else if (type === 'sublocality_level_2') {
          address2 = address2 + (item.long_name ? item.long_name + ', ' : '')
        }
        else if (type === 'locality' || type === 'administrative_area_level_2') {
          data['city'] = item.long_name
        }
        else if (type === 'administrative_area_level_1' || type === 'sublocality_level_1') {
          data['state'] = item.long_name
        }
        else if (type === 'country') {
          data['country'] = item.long_name
        }
        else if (type === 'postal_code') {
          data['postal_code'] = item.long_name
        }
      }
    }
    data['address2'] = address2
    return data
  },
  addToCartItems(selectitems, item, type, e) {
    let tempSelectitems = JSON.parse(JSON.stringify(selectitems));
    if (!tempSelectitems[item.id]) {
      tempSelectitems[item.id] = { id: item.id, discountType: item.discountType, discountAmount: item.discountAmount, name: item.itemName, notes: '', amount: item.itemAmount, count: 0, services: {} }
    }
    if (type === 'add') {
      tempSelectitems[item.id]['count'] = tempSelectitems[item.id]['count'] + 1
    } else if (type === 'remove') {
      tempSelectitems[item.id]['count'] = (tempSelectitems[item.id]['count'] != 0) ? tempSelectitems[item.id]['count'] - 1 : tempSelectitems[item.id]['count']
    } else if (type === 'notes') {
      tempSelectitems[item.id]['notes'] = e
    } else {
      tempSelectitems[item.id]['services'][type] = e
    }
    let totalAmount = Number(tempSelectitems[item.id].amount) * tempSelectitems[item.id].count
    for (let key in tempSelectitems[item.id].services) {
      if (tempSelectitems[item.id].services[key]) {
        totalAmount = totalAmount + (Number(tempSelectitems[item.id].services[key]) * tempSelectitems[item.id].count)
      }
    }
    tempSelectitems[item.id]['totalAmount'] = totalAmount
    return tempSelectitems
  },
  totalAmoutDetails(data, vender, settings) {
    let selectitems = JSON.parse(JSON.stringify(data));
    // Details 
    let tempSelectitems = {}
    let totalItems = 0
    let totalAmount = 0
    let totalPackaging = vender.packagingCharges ? vender.packagingCharges : 0
    let totalTax = 0
    let subTotalPrice = 0
    let totalDiscount = 0
    let itemlist = {}
    for (let key in selectitems) {
      // if (selectitems[key].count > 0) {
      totalItems = totalItems + Number(selectitems[key].count)
      totalAmount = totalAmount + Number(selectitems[key].totalAmount)
      itemlist[key] = selectitems[key]
      // }
    }
    totalTax = Number(totalAmount % settings.tax)
    subTotalPrice = totalAmount - (totalTax + totalPackaging)
    tempSelectitems['itemlist'] = itemlist
    tempSelectitems['totalItems'] = totalItems
    tempSelectitems['totalPackaging'] = totalPackaging
    tempSelectitems['totalDiscount'] = totalDiscount
    tempSelectitems['totalTax'] = totalTax
    tempSelectitems['subTotalPrice'] = subTotalPrice
    if (selectitems.checkoutType === 'EXPRESS') {
      tempSelectitems['totalAmount'] = totalAmount * 2
    } else {
      tempSelectitems['totalAmount'] = totalAmount
    }
    return tempSelectitems
  }
};

export default SiteApis;
