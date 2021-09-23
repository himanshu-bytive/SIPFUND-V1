import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    LOGOUT: 'LOGOUT',

    FETCH_VERIFY_PENDING: "FETCH_VERIFY_PENDING",
    FETCH_VERIFY_SUCCESS: "FETCH_VERIFY_SUCCESS",
    FETCH_VERIFY_FAILURE: "FETCH_VERIFY_FAILURE",

    FETCH_OTP_PENDING: "FETCH_OTP_PENDING",
    FETCH_OTP_SUCCESS: "FETCH_OTP_SUCCESS",
    FETCH_OTP_FAILURE: "FETCH_OTP_FAILURE",

    FETCH_CREATE_ACCOUNT_PENDING: "FETCH_CREATE_ACCOUNT_PENDING",
    FETCH_CREATE_ACCOUNT_SUCCESS: "FETCH_CREATE_ACCOUNT_SUCCESS",
    FETCH_CREATE_ACCOUNT_FAILURE: "FETCH_CREATE_ACCOUNT_FAILURE",

    FETCH_FORGET_PASS_PENDING: "FETCH_FORGET_PASS_PENDING",
    FETCH_FORGET_PASS_SUCCESS: "FETCH_FORGET_PASS_SUCCESS",
    FETCH_FORGET_PASS_FAILURE: "FETCH_FORGET_PASS_FAILURE",

    FETCH_LOGIN_PENDING: "FETCH_LOGIN_PENDING",
    FETCH_LOGIN_SUCCESS: "FETCH_LOGIN_SUCCESS",
    FETCH_LOGIN_FAILURE: "FETCH_LOGIN_FAILURE",

};

export const AuthActions = {
    verify: async (dispatch, params) => {
        dispatch({ type: types.FETCH_VERIFY_PENDING });
        let auth = await SiteAPI.apiPostCall('/auth/verify', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_VERIFY_FAILURE, error: '' });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_VERIFY_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    otp: async (dispatch, params) => {
        dispatch({ type: types.FETCH_OTP_PENDING });
        let data = await SiteAPI.apiPostCall('/auth/validate', params);
        console.log(data)
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
        let data = await SiteAPI.apiPostCall('/auth/auth', params);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_CREATE_ACCOUNT_FAILURE, error: '' });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_CREATE_ACCOUNT_SUCCESS, signUpSteps: data.signUpSteps, validFlag: data.validFlag });
        }
    },
    forgotPassword: async (dispatch, params) => {
        dispatch({ type: types.FETCH_FORGET_PASS_PENDING });
        let data = await SiteAPI.apiPostCall('/password/forgotPassword', params);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_FORGET_PASS_FAILURE, error: '' });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_FORGET_PASS_SUCCESS, signUpSteps: data.signUpSteps, validFlag: data.validFlag });
        }
    },
    login: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_LOGIN_PENDING });
        let data = await SiteAPI.apiPostCall('/token', params, token);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_LOGIN_FAILURE, error: '' });
        } else {
            dispatch({ type: types.FETCH_LOGIN_SUCCESS, user: data, token: data.access_token });
        }
    },
    logout() {
        return { type: types.LOGOUT };
    },
};

const initialState = {
    isFetching: false,
    error: null,
    signUpSteps: null,
    validFlag: null,
    phone: null,
    phones: [],
    user: null,
    token: null,
};

export const reducer = (state = initialState, action) => {
    const { type, error, phone, signUpSteps, validFlag, user, token } = action;
    switch (type) {
        case types.FETCH_VERIFY_PENDING:
        case types.FETCH_FORGET_PASS_PENDING:
        case types.FETCH_CREATE_ACCOUNT_PENDING:
        case types.FETCH_OTP_PENDING:
        case types.FETCH_LOGIN_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_VERIFY_FAILURE:
        case types.FETCH_FORGET_PASS_FAILURE:
        case types.FETCH_CREATE_ACCOUNT_FAILURE:
        case types.FETCH_OTP_FAILURE:
        case types.FETCH_LOGIN_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        case types.FETCH_VERIFY_SUCCESS: {
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
        case types.FETCH_FORGET_PASS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_LOGIN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                user,
                token: `Bearer ${token}`
            };
        }
        case types.LOGOUT:
            return Object.assign({}, initialState, { phones: state.phones });
        default:
            return state;
    }
};
