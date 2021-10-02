import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    LOGOUT: 'LOGOUT',

    FETCH_FETCH_SCHEME_PENDING: "FETCH_FETCH_SCHEME_PENDING",
    FETCH_FETCH_SCHEME_SUCCESS: "FETCH_FETCH_SCHEME_SUCCESS",
    FETCH_FETCH_SCHEME_FAILURE: "FETCH_FETCH_SCHEME_FAILURE",

    FETCH_SCHEME_LIST_PENDING: "FETCH_SCHEME_LIST_PENDING",
    FETCH_SCHEME_LIST_SUCCESS: "FETCH_SCHEME_LIST_SUCCESS",
    FETCH_SCHEME_LIST_FAILURE: "FETCH_SCHEME_LIST_FAILURE",

    FETCH_SUB_CATAGORY_PENDING: "FETCH_SUB_CATAGORY_PENDING",
    FETCH_SUB_CATAGORY_SUCCESS: "FETCH_SUB_CATAGORY_SUCCESS",
    FETCH_SUB_CATAGORY_FAILURE: "FETCH_SUB_CATAGORY_FAILURE",

    FETCH_MAIN_CATEGORY_PENDING: "FETCH_MAIN_CATEGORY_PENDING",
    FETCH_MAIN_CATEGORY_SUCCESS: "FETCH_MAIN_CATEGORY_SUCCESS",
    FETCH_MAIN_CATEGORY_FAILURE: "FETCH_MAIN_CATEGORY_FAILURE",



};

export const OwnerChoiceActions = {
    fetchScheme: async (dispatch, params) => {
        dispatch({ type: types.FETCH_FETCH_SCHEME_PENDING });
        let auth = await SiteAPI.apiPostCall('/morningStarApi/data', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_FETCH_SCHEME_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_FETCH_SCHEME_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    schemeList: async (dispatch, params) => {
        dispatch({ type: types.FETCH_FETCH_SCHEME_PENDING });
        let auth = await SiteAPI.apiGetCall('/product/productbycategory/Value Fund', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_FETCH_SCHEME_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_FETCH_SCHEME_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    subCatagory: async (dispatch, params) => {
        dispatch({ type: types.FETCH_SUB_CATAGORY_PENDING });
        let auth = await SiteAPI.apiGetCall('/product/schemesubcategory/Equity', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_SUB_CATAGORY_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_SUB_CATAGORY_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
        }
    },
    mainCategory: async (dispatch, params) => {
        dispatch({ type: types.FETCH_MAIN_CATEGORY_PENDING });
        let auth = await SiteAPI.apiGetCall('/product/schemecategory', params);
        if (auth.error) {
            Alert.alert(auth.message)
            dispatch({ type: types.FETCH_MAIN_CATEGORY_FAILURE, error: auth.message });
        } else {
            Alert.alert(auth.responseString)
            dispatch({ type: types.FETCH_MAIN_CATEGORY_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
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
       
        case types.FETCH_MAIN_CATEGORY_PENDING: 
        case types.FETCH_SUB_CATAGORY_PENDING: 
        case types.FETCH_SCHEME_LIST_PENDING: 
        case types.FETCH_FETCH_SCHEME_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
       
        case types.FETCH_MAIN_CATEGORY_FAILURE:
        case types.FETCH_SUB_CATAGORY_FAILURE:
        case types.FETCH_SCHEME_LIST_FAILURE:
        case types.FETCH_FETCH_SCHEME_FAILURE:{
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
       
        case types.FETCH_FETCH_SCHEME_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_SCHEME_LIST_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_SUB_CATAGORY_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        }
        case types.FETCH_MAIN_CATEGORY_SUCCESS: {
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
