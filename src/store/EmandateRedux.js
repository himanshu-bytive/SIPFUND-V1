import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {
   
    FETCH_EMANDATE_REGISTRATION_PENDING: "FETCH_EMANDATE_REGISTRATION_PENDING",
    FETCH_EMANDATE_REGISTRATION_SUCCESS: "FETCH_EMANDATE_REGISTRATION_SUCCESS",
    FETCH_EMANDATE_REGISTRATION_FAILURE: "FETCH_EMANDATE_REGISTRATION_FAILURE",

    FETCH_EMANDATE_OPTIONS_PENDING: "FETCH_EMANDATE_OPTIONS_PENDING",
    FETCH_EMANDATE_OPTIONS_SUCCESS: "FETCH_EMANDATE_OPTIONS_SUCCESS",
    FETCH_EMANDATE_OPTIONS_FAILURE: "FETCH_EMANDATE_OPTIONS_FAILURE",

};

export const EmandateActions = {
    emandateRegistration : async (dispatch, token) => {
        dispatch({ type: types.FETCH_EMANDATE_REGISTRATION_PENDING });
        let documents = await SiteAPI.apiPostCall(`/apiData/ACHMANDATEREGISTRATIONS`, {}, token);
        if (documents.responseString) {
            dispatch({ type: types.FETCH_EMANDATE_REGISTRATION_SUCCESS, documents: documents });
        }
    },
    emandateOptions: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_EMANDATE_OPTIONS_PENDING });
            let citys = await SiteAPI.apiGetCall(`/emandateOptions/`, {}, token);
            if (citys.Data) {
                dispatch({ type: types.FETCH_EMANDATE_OPTIONS_SUCCESS, citys: citys.Data.city_master });
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
        case types.FETCH_EMANDATE_REGISTRATION_PENDING:
        case types.FETCH_EMANDATE_OPTIONS_PENDING:{

            return {
                ...state,
                isFetching: true,
                error: null,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
            };
        }

        case types.FETCH_EMANDATE_REGISTRATION_FAILURE:
        case types.FETCH_EMANDATE_OPTIONS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
                error,
            };
        }
        
        case types.FETCH_EMANDATE_REGISTRATION_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                documents
            };
        }
        case types.FETCH_EMANDATE_OPTIONS_SUCCESS: {
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
