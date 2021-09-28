import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {
    GET_OCCUPATION: 'GET_OCCUPATION',
    SAVE_USER_DETAILS: 'SAVE_USER_DETAILS',

    FETCH_CITY_PENDING: "FETCH_CITY_PENDING",
    FETCH_CITY_SUCCESS: "FETCH_CITY_SUCCESS",
    FETCH_CITY_FAILURE: "FETCH_CITY_FAILURE",

    FETCH_BANK_PENDING: "FETCH_BANK_PENDING",
    FETCH_BANK_SUCCESS: "FETCH_OTP_SUCCESS",
    FETCH_BANK_FAILURE: "FETCH_BANK_FAILURE",

    FETCH_PINCODE_INFO_PENDING: "FETCH_PINCODE_INFO_PENDING",
    FETCH_PINCODE_INFO_SUCCESS: "FETCH_PINCODE_INFO_SUCCESS",
    FETCH_PINCODE_INFO_FAILURE: "FETCH_PINCODE_INFO_FAILURE",

    FETCH_CREATE_REGISTER_PENDING: "FETCH_CREATE_REGISTER_PENDING",
    FETCH_CREATE_REGISTER_SUCCESS: "FETCH_CREATE_REGISTER_SUCCESS",
    FETCH_CREATE_REGISTER_FAILURE: "FETCH_CREATE_REGISTER_FAILURE",

    FETCH_UPDATE_REGISTER_PENDING: "FETCH_UPDATE_REGISTER_PENDING",
    FETCH_UPDATE_REGISTER_SUCCESS: "FETCH_UPDATE_REGISTER_SUCCESS",
    FETCH_UPDATE_REGISTER_FAILURE: "FETCH_UPDATE_REGISTER_FAILURE",

    FETCH_FILE_UPLOAD_PENDING: "FETCH_FILE_UPLOAD_PENDING",
    FETCH_FILE_UPLOAD_SUCCESS: "FETCH_FILE_UPLOAD_SUCCESS",
    FETCH_FILE_UPLOAD_FAILURE: "FETCH_FILE_UPLOAD_FAILURE",

};

export const RegistrationActions = {
    settings: async (dispatch, token) => {
        let occupation = await SiteAPI.apiGetCall('/apiData/Occupation', {}, token);
        let income = await SiteAPI.apiGetCall('/apiData/ApplicableIncome', {}, token);
        let state = await SiteAPI.apiGetCall('/apiData/State', {}, token);
        let accountType = await SiteAPI.apiGetCall('/apiData/AccountType', {}, token);
        let bank = await SiteAPI.apiGetCall('/apiData/Bank', {}, token);
        if (occupation.Data && income.Data && state.Data && accountType.Data && bank.Data) {
            dispatch({
                type: types.GET_OCCUPATION,
                occupations: occupation.Data.occupation_master,
                incomes: income.Data.Applicable_Income,
                states: state.Data.state_master,
                accountTypes: accountType.Data.account_type,
                banks: bank.Data.bank_master,
            });
        }
    },
    getCitys: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_CITY_PENDING });
            let citys = await SiteAPI.apiGetCall(`/apiData/City?StateCode=${code}`, {}, token);
            if (citys.Data) {
                dispatch({ type: types.FETCH_CITY_SUCCESS, citys: citys.Data.city_master });
            }
        }
    },
    getPincode: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_PINCODE_INFO_PENDING });
            let pincodes = await SiteAPI.apiGetCall(`/apiData/Pincode?pinCode=${code}`, {}, token);
            if (pincodes.data) {
                dispatch({ type: types.FETCH_PINCODE_INFO_SUCCESS, pincodeInfo: pincodes.data });
            }
        }
    },
    getBankDetails: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_BANK_PENDING });
            let banks = await SiteAPI.apiGetCall(`/ifsc?code=${code}`, {}, token);
            if (banks.validFlag) {
                dispatch({ type: types.FETCH_BANK_SUCCESS, bankDetails: banks.responseString });
            } else {
                dispatch({ type: types.FETCH_BANK_FAILURE, error: '' });
            }
        }
    },
    setUserInfo: async (dispatch, userInfo) => {
        dispatch({ type: types.SAVE_USER_DETAILS, userInfo });
    },
    createRegister: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_CREATE_REGISTER_PENDING });
        let data = await SiteAPI.apiPostCall('/apiData/CREATECUSTOMER', params, token);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_CREATE_REGISTER_FAILURE, error: data.message });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_CREATE_REGISTER_SUCCESS, });
        }
    },
    updateRegister: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_UPDATE_REGISTER_PENDING });
        let data = await SiteAPI.apiPutCall('/user/rawData', params, token);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_UPDATE_REGISTER_FAILURE, error: data.message });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_UPDATE_REGISTER_SUCCESS, });
        }
    },
    fileUpload: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_FILE_UPLOAD_PENDING });
        let data = await SiteAPI.apiPostCall(`/documents/uploads?docType=${params.fileType}`, params, token);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_FILE_UPLOAD_FAILURE, error: data.message });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_FILE_UPLOAD_SUCCESS, });
        }
    },

};

const initialState = {
    isFetching: false,
    error: null,
    occupations: [],
    incomes: [],
    states: [],
    citys: [],
    pincodeInfo: null,
    accountTypes: [],
    banks: [],
    bankDetails: {},
    userInfo: null,
};

export const reducer = (state = initialState, action) => {
    const { type, error, occupations, incomes, states, citys, accountTypes, banks, bankDetails, userInfo, pincodeInfo } = action;
    switch (type) {
        case types.FETCH_FILE_UPLOAD_PENDING:
        case types.FETCH_UPDATE_REGISTER_PENDING:
        case types.FETCH_CREATE_REGISTER_PENDING:
        case types.FETCH_PINCODE_INFO_PENDING:
        case types.FETCH_BANK_PENDING:
        case types.FETCH_CITY_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_FILE_UPLOAD_FAILURE:
        case types.FETCH_UPDATE_REGISTER_FAILURE:
        case types.FETCH_CREATE_REGISTER_FAILURE:
        case types.FETCH_PINCODE_INFO_FAILURE:
        case types.FETCH_BANK_FAILURE:
        case types.FETCH_CITY_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        case types.GET_OCCUPATION: {
            return {
                ...state,
                isFetching: false,
                error: null,
                occupations,
                incomes,
                states,
                accountTypes,
                banks,
            };
        }
        case types.FETCH_CITY_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                citys
            };
        }
        case types.FETCH_PINCODE_INFO_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                pincodeInfo
            };
        }
        case types.FETCH_BANK_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                bankDetails
            };
        }
        case types.SAVE_USER_DETAILS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                userInfo
            };
        }
        case types.FETCH_CREATE_REGISTER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_UPDATE_REGISTER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_FILE_UPLOAD_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        default:
            return state;
    }
};
