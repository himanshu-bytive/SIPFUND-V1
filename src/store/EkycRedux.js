import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    FETCH_GETLIST_PENDING: "FETCH_GETLIST_PENDING",
    FETCH_GETLIST_SUCCESS: "FETCH_GETLIST_SUCCESS",
    FETCH_GETLIST_FAILURE: "FETCH_GETLIST_FAILURE",

    FETCH_POST_REQUEST_PENDING: "FETCH_POST_REQUEST_PENDING",
    FETCH_POST_REQUEST_SUCCESS: "FETCH_POST_REQUEST_SUCCESS",
    FETCH_POST_REQUEST_FAILURE: "FETCH_POST_REQUEST_FAILURE",

};

export const EkycActions = {
    
    getList : async (dispatch, token) => {
        dispatch({ type: types.FETCH_GETLIST_PENDING });
        let documents = await SiteAPI.apiGetCall(`/amcforekyc/details`, {}, token);
        if (documents.responseString) {
            dispatch({ type: types.FETCH_GETLIST_SUCCESS, documents: documents });
        }
    },
    postRequest: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_POST_REQUEST_PENDING });
            let citys = await SiteAPI.apiPostCall(`/apiData/eKYC_REGISTRATION`, {}, token);
            if (citys.Data) {
                dispatch({ type: types.FETCH_POST_REQUEST_SUCCESS, citys: citys.Data.city_master });
            }
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
    documents: null,
    addSuccess: false,
    updateSuccess: false,
    uploadSuccess: false,
};

export const reducer = (state = initialState, action) => {
    const { type, error, occupations, incomes, states, citys, accountTypes, banks, bankDetails, userInfo, pincodeInfo, documents } = action;
    switch (type) {
        case types.FETCH_GETLIST_PENDING:
        case types.FETCH_POST_REQUEST_PENDING:{

            return {
                ...state,
                isFetching: true,
                error: null,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
            };
        }

        case types.FETCH_GETLIST_FAILURE:
        case types.FETCH_POST_REQUEST_FAILURE: {
            return {
                ...state,
                isFetching: false,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
                error,
            };
        }
        
        case types.FETCH_GETLIST_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                documents
            };
        }
        case types.FETCH_POST_REQUEST_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                citys
            };
        }

        default:
            return state;
    }
};
