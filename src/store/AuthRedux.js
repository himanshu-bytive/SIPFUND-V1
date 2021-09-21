import SiteAPI from '../services/SiteApis'
import { Platform, Alert } from 'react-native';
const types = {
    LOGOUT: 'LOGOUT',
    FETCH_LOGIN_PENDING: "FETCH_LOGIN_PENDING",
    FETCH_LOGIN_SUCCESS: "FETCH_LOGIN_SUCCESS",
    FETCH_LOGIN_FAILURE: "FETCH_LOGIN_FAILURE",

    FETCH_OTP_PENDING: "FETCH_OTP_PENDING",
    FETCH_OTP_SUCCESS: "FETCH_OTP_SUCCESS",
    FETCH_OTP_FAILURE: "FETCH_OTP_FAILURE",

    FETCH_CREATE_ACCOUNT_PENDING: "FETCH_CREATE_ACCOUNT_PENDING",
    FETCH_CREATE_ACCOUNT_SUCCESS: "FETCH_CREATE_ACCOUNT_SUCCESS",
    FETCH_CREATE_ACCOUNT_FAILURE: "FETCH_CREATE_ACCOUNT_FAILURE",

    GET_SERVICES: 'GET_SERVICES',
    GET_PAGES: 'GET_PAGES',
    GET_SETTINGS: 'GET_SETTINGS',
    SET_STATUS: 'SET_STATUS',
    FINISH_INTRO: 'FINISH_INTRO',
};

export const AuthActions = {
    login: async (dispatch, params) => {
        dispatch({ type: types.FETCH_LOGIN_PENDING });
        let auth = await SiteAPI.apiPostCall('/auth/verify', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_LOGIN_FAILURE, error: '' });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_LOGIN_SUCCESS, phone, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    otp: async (dispatch, params) => {
        dispatch({ type: types.FETCH_OTP_PENDING });
        let data = await SiteAPI.apiPostCall('/auth/validate',params);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_OTP_FAILURE, error: '' });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_OTP_SUCCESS, signUpSteps: data.signUpSteps, validFlag: data.validFlag });
        }
    },
    createAccount: async (dispatch, params) => {
        dispatch({ type: types.FETCH_CREATE_ACCOUNT_PENDING });
        let data = await SiteAPI.apiPostCall('/auth/auth',params);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_CREATE_ACCOUNT_FAILURE, error: '' });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_CREATE_ACCOUNT_SUCCESS, signUpSteps: data.signUpSteps, validFlag: data.validFlag });
        }
    },
    logout() {
        return { type: types.LOGOUT };
    },
    setServices(services) {
        return { type: types.GET_SERVICES, services };
    },
    setPages(pages) {
        return { type: types.GET_PAGES, pages };
    },
    setStatus(status) {
        return { type: types.SET_STATUS, status };
    },
    setSettings(settings) {
        return { type: types.GET_SETTINGS, settings };
    },
    finishIntro() {
        return { type: types.FINISH_INTRO };
    },
};

const initialState = {
    isFetching: false,
    error: null,
    user: null,
    signUpSteps: null,
    validFlag: null,
    phone: null,
    phones: [],
};

export const reducer = (state = initialState, action) => {
    const { type, error, phone, signUpSteps, validFlag } = action;
    switch (type) {
        case types.FETCH_CREATE_ACCOUNT_PENDING:
        case types.FETCH_OTP_PENDING:
        case types.FETCH_LOGIN_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_CREATE_ACCOUNT_FAILURE:
        case types.FETCH_OTP_FAILURE:
        case types.FETCH_LOGIN_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        case types.FETCH_LOGIN_SUCCESS: {
            let phones = [...state.phones, phone]
            let uniq = [...new Set(phones)];
            if (uniq.length >= 3) {
                uniq.length = 3
            }
            return {
                ...state,
                isFetching: false,
                error: null,
                signUpSteps,
                validFlag,
                phone,
                phones: uniq
            };
        }
        case types.FETCH_OTP_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                signUpSteps,
                validFlag,
            };
        }
        case types.FETCH_CREATE_ACCOUNT_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.LOGOUT:
            return Object.assign({}, initialState);
        case types.GET_SERVICES:
            return { ...state, services };
        case types.GET_PAGES:
            return { ...state, pages };
        case types.GET_SETTINGS:
            return { ...state, settings };
        case types.FINISH_INTRO:
            return { ...state, finishIntro: true };
        default:
            return state;
    }
};
