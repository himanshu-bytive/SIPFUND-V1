import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    LOGOUT: 'LOGOUT',

    FETCH_FET_TRANSACTION_DETAILS_PENDING: "FETCH_FET_TRANSACTION_DETAILS_PENDING",
    FETCH_FET_TRANSACTION_DETAILS_SUCCESS: "FETCH_FET_TRANSACTION_DETAILS_SUCCESS",
    FETCH_FET_TRANSACTION_DETAILS_FAILURE: "FETCH_FET_TRANSACTION_DETAILS_FAILURE",

    FETCH_SWITCH_AMOUNT_PENDING: "FETCH_SWITCH_AMOUNT_PENDING",
    FETCH_SWITCH_AMOUNT_SUCCESS: "FETCH_SWITCH_AMOUNT_SUCCESS",
    FETCH_SWITCH_AMOUNT_FAILURE: "FETCH_SWITCH_AMOUNT_FAILURE",

   



};

export const SwitchActions = {
    fetchTransactionDetails: async (dispatch, params) => {
        dispatch({ type: types.FETCH_FET_TRANSACTION_DETAILS_PENDING });
        let auth = await SiteAPI.apiPostCall('/operationData', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_FET_TRANSACTION_DETAILS_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_FET_TRANSACTION_DETAILS_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    switchAmount: async (dispatch, params) => {
        dispatch({ type: types.FETCH_SWITCH_AMOUNT_PENDING });
        let auth = await SiteAPI.apiPostCall('/exceptional/REDEEMTRXNEXCEPTION', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_SWITCH_AMOUNT_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_SWITCH_AMOUNT_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
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
       
        
        case types.FETCH_SWITCH_AMOUNT_PENDING:
        case types.FETCH_FET_TRANSACTION_DETAILS_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
       
        
        case types.FETCH_SWITCH_AMOUNT_FAILURE:
        case types.FETCH_FET_TRANSACTION_DETAILS_FAILURE:{
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
       
        case types.FETCH_FET_TRANSACTION_DETAILS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_SWITCH_AMOUNT_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
       
       
        
        case types.LOGOUT:
            return Object.assign({}, initialState, { phones: state.phones });
        default:
            return state;
    }
};
