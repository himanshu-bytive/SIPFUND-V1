import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    LOGOUT: 'LOGOUT',

    FETCH_FETCH_TRANSACTION_HIS_PENDING: "FETCH_FETCH_TRANSACTION_HIS_PENDING",
    FETCH_FETCH_TRANSACTION_HIS_SUCCESS: "FETCH_FETCH_TRANSACTION_HIS_SUCCESS",
    FETCH_FETCH_TRANSACTION_HIS_FAILURE: "FETCH_FETCH_TRANSACTION_HIS_FAILURE",

   



};

export const TransactionHisActions = {
    fetchTransaction: async (dispatch, params) => {
        dispatch({ type: types.FETCH_FETCH_TRANSACTION_HIS_PENDING });
        let auth = await SiteAPI.apiPostCall('/apiData/TRXNREVERSEFEED', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_FETCH_TRANSACTION_HIS_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_FETCH_TRANSACTION_HIS_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
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
       
        
        case types.FETCH_FETCH_TRANSACTION_HIS_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
       
        
        case types.FETCH_FETCH_TRANSACTION_HIS_FAILURE:{
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
       
        case types.FETCH_FETCH_TRANSACTION_HIS_SUCCESS: {
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
