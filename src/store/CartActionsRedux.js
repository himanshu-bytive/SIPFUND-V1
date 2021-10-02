import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    LOGOUT: 'LOGOUT',

    FETCH_ADD_ITEM_PENDING: "FETCH_ADD_ITEM_PENDING",
    FETCH_ADD_ITEM_SUCCESS: "FETCH_ADD_ITEM_SUCCESS",
    FETCH_ADD_ITEM_FAILURE: "FETCH_ADD_ITEM_FAILURE",

    FETCH_DELET_CART_PENDING: "FETCH_DELET_CART_PENDING",
    FETCH_DELET_CART_SUCCESS: "FETCH_DELET_CART_SUCCESS",
    FETCH_DELET_CART_FAILURE: "FETCH_DELET_CART_FAILURE",

    FETCH_ADD_ITEM_SIP_PENDING: "FETCH_ADD_ITEM_SIP_PENDING",
    FETCH_ADD_ITEM_SIP_SUCCESS: "FETCH_ADD_ITEM_SIP_SUCCESS",
    FETCH_ADD_ITEM_SIP_FAILURE: "FETCH_ADD_ITEM_SIP_FAILURE",

    FETCH_CART_DETAILS_PENDING: "FETCH_CART_DETAILS_PENDING",
    FETCH_CART_DETAILS_SUCCESS: "FETCH_CART_DETAILS_SUCCESS",
    FETCH_CART_DETAILS_FAILURE: "FETCH_CART_DETAILS_FAILURE",



};

export const CartActions = {
    addItem: async (dispatch, params) => {
        dispatch({ type: types.FETCH_ADD_ITEM_PENDING });
        let auth = await SiteAPI.apiPostCall('/addCart', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_ADD_ITEM_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_ADD_ITEM_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    deletCart: async (dispatch, params) => {
        dispatch({ type: types.FETCH_DELET_CART_PENDING });
        let auth = await SiteAPI.apiPostCall('/addCart/delete', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_DELET_CART_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_DELET_CART_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    addItomToSip: async (dispatch, params) => {
        dispatch({ type: types.FETCH_ADD_ITEM_SIP_PENDING });
        let auth = await SiteAPI.apiPostCall('/addCart', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_ADD_ITEM_SIP_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_ADD_ITEM_SIP_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    cartDetails: async (dispatch, params) => {
        dispatch({ type: types.FETCH_CART_DETAILS_PENDING });
        let auth = await SiteAPI.apiGetCall('/addCart', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_CART_DETAILS_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_CART_DETAILS_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
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
       
        case types.FETCH_CART_DETAILS_PENDING: 
        case types.FETCH_ADD_ITEM_SIP_PENDING: 
        case types.FETCH_DELET_CART_PENDING: 
        case types.FETCH_ADD_ITEM_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
       
        case types.FETCH_CART_DETAILS_FAILURE:
        case types.FETCH_ADD_ITEM_SIP_FAILURE:
        case types.FETCH_DELET_CART_FAILURE:
        case types.FETCH_ADD_ITEM_FAILURE:{
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
       
        case types.FETCH_ADD_ITEM_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_DELET_CART_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_ADD_ITEM_SIP_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_CART_DETAILS_SUCCESS: {
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
