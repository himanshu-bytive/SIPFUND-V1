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

    FETCH_RESEND_OTP_PENDING: "FETCH_RESEND_OTP_PENDING",
    FETCH_RESEND_OTP_SUCCESS: "FETCH_RESEND_OTP_SUCCESS",
    FETCH_RESEND_OTP_FAILURE: "FETCH_RESEND_OTP_FAILURE",

    FETCH_FORGET_PASS_PENDING: "FETCH_FORGET_PASS_PENDING",
    FETCH_FORGET_PASS_SUCCESS: "FETCH_FORGET_PASS_SUCCESS",
    FETCH_FORGET_PASS_FAILURE: "FETCH_FORGET_PASS_FAILURE",

    FETCH_CHANGE_PASSWORD_PENDING: "FETCH_CHANGE_PASSWORD_PENDING",
    FETCH_CHANGE_PASSWORD_SUCCESS: "FETCH_CHANGE_PASSWORD_SUCCESS",
    FETCH_CHANGE_PASSWORD_FAILURE: "FETCH_CHANGE_PASSWORD_FAILURE",

    FETCH_PAN_NUMBER_PENDING: "FETCH_PAN_NUMBER_PENDING",
    FETCH_PAN_NUMBER_SUCCESS: "FETCH_PAN_NUMBER_SUCCESS",
    FETCH_PAN_NUMBER_FAILURE: "FETCH_PAN_NUMBER_FAILURE",

    FETCH_LOGIN_PENDING: "FETCH_LOGIN_PENDING",
    FETCH_LOGIN_SUCCESS: "FETCH_LOGIN_SUCCESS",
    FETCH_LOGIN_FAILURE: "FETCH_LOGIN_FAILURE",

    FETCH_CREAT_ACCOUNT_PENDING: "FETCH_CREAT_ACCOUNT_PENDING",
    FETCH_CREAT_ACCOUNT_SUCCESS: "FETCH_CREAT_ACCOUNT_SUCCESS",
    FETCH_CREAT_ACCOUNT_FAILURE: "FETCH_CREAT_ACCOUNT_FAILURE",

};

export const AuthActions = {
    verify: async (dispatch, params) => {
        dispatch({ type: types.FETCH_VERIFY_PENDING });
        let auth = await SiteAPI.apiPostCall('/auth/verify', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_VERIFY_FAILURE, error: auth.message });
        } else {
            Alert.alert(
                'SIP Fund',
                auth.responseString,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch({ type: types.FETCH_VERIFY_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
                        }
                    },
                ]
            );
        }
    },
    otp: async (dispatch, params) => {
        dispatch({ type: types.FETCH_OTP_PENDING });
        let data = await SiteAPI.apiPostCall('/auth/validate', params);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_OTP_FAILURE, error: data.message });
        } else {
            Alert.alert(
                'SIP Fund',
                auth.responseString,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch({ type: types.FETCH_OTP_SUCCESS, signUpSteps: data.signUpSteps, validFlag: data.validFlag });
                        }
                    },
                ]
            );
        }
    },
    resendOtp: async (dispatch, params) => {
        dispatch({ type: types.FETCH_RESEND_OTP_PENDING });
        let data = await SiteAPI.apiPostCall('/auth/resend', params);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_RESEND_OTP_FAILURE, error: data.message });
        } else {
            Alert.alert(
                'SIP Fund',
                auth.responseString,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch({ type: types.FETCH_RESEND_OTP_SUCCESS });
                        }
                    },
                ]
            );
        }
    },
    changePassword: async (dispatch, params) => {
        dispatch({ type: types.FETCH_CHANGE_PASSWORD_PENDING });
        let data = await SiteAPI.apiPutCall('/password/changePassword', params);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_CHANGE_PASSWORD_FAILURE, error: data.message });
        } else {
            Alert.alert(
                'SIP Fund',
                auth.responseString,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch({ type: types.FETCH_CHANGE_PASSWORD_SUCCESS, signUpSteps: data.signUpSteps, validFlag: data.validFlag });
                        }
                    },
                ]
            );
        }
    },
    panNumber: async (dispatch, params) => {
        dispatch({ type: types.FETCH_PAN_NUMBER_PENDING });
        let data = await SiteAPI.apiPostCall('/user/userPan', params);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_PAN_NUMBER_FAILURE, error: data.message });
        } else {
            Alert.alert(
                'SIP Fund',
                auth.responseString,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch({ type: types.FETCH_PAN_NUMBER_SUCCESS, panNumber: data.data });
                        }
                    },
                ]
            );
        }
    },
    forgotPassword: async (dispatch, params) => {
        dispatch({ type: types.FETCH_FORGET_PASS_PENDING });
        let data = await SiteAPI.apiPostCall('/password/forgotPassword', params);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_FORGET_PASS_FAILURE, error: data.message });
        } else {
            Alert.alert(
                'SIP Fund',
                auth.responseString,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch({ type: types.FETCH_FORGET_PASS_SUCCESS });
                        }
                    },
                ]
            );
        }
    },
    login: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_LOGIN_PENDING });
        let data = await SiteAPI.apiPostCall('/token', params, token);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_LOGIN_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_LOGIN_SUCCESS, user: data, token: data.access_token });
        }
    },
    logout() {
        return { type: types.LOGOUT };
    },
    creatAccount: async (dispatch, params) => {
        dispatch({ type: types.FETCH_CREAT_ACCOUNT_PENDING });
        let data = await SiteAPI.apiPostCall('/auth', params);
        console.log(data)
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_CREAT_ACCOUNT_FAILURE, error: data.message });
        } else {
            Alert.alert(
                'SIP Fund',
                auth.responseString,
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch({ type: types.FETCH_CREAT_ACCOUNT_SUCCESS, signUpSteps: data.signUpSteps, validFlag: data.validFlag });
                        }
                    },
                ]
            );            
        }
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
    password: false,
    panNumber: null,
};

export const reducer = (state = initialState, action) => {
    const { type, error, phone, signUpSteps, validFlag, user, token, panNumber } = action;
    switch (type) {
        case types.FETCH_CREAT_ACCOUNT_PENDING:
        case types.FETCH_PAN_NUMBER_PENDING:
        case types.FETCH_CHANGE_PASSWORD_PENDING:
        case types.FETCH_RESEND_OTP_PENDING:
        case types.FETCH_VERIFY_PENDING:
        case types.FETCH_FORGET_PASS_PENDING:
        case types.FETCH_OTP_PENDING:
        case types.FETCH_LOGIN_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_CREAT_ACCOUNT_FAILURE:
        case types.FETCH_PAN_NUMBER_FAILURE:
        case types.FETCH_CHANGE_PASSWORD_FAILURE:
        case types.FETCH_RESEND_OTP_FAILURE:
        case types.FETCH_VERIFY_FAILURE:
        case types.FETCH_FORGET_PASS_FAILURE:
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
        case types.FETCH_RESEND_OTP_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                signUpSteps,
                validFlag,
            };
        }
        case types.FETCH_FORGET_PASS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                password: true
            };
        }
        case types.FETCH_CHANGE_PASSWORD_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_PAN_NUMBER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                panNumber
            };
        }
        case types.FETCH_CREAT_ACCOUNT_SUCCESS: {
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
