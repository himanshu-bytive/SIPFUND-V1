import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    FETCH_FETCH_FUNDS_PENDING: "FETCH_FETCH_FUNDS_PENDING",
    FETCH_FETCH_FUNDS_SUCCESS: "FETCH_FETCH_FUNDS_SUCCESS",
    FETCH_FETCH_FUNDS_FAILURE: "FETCH_FETCH_FUNDS_FAILURE",

};

export const AddMoreFundsActions = {
    
    fetchFunds: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_FETCH_FUNDS_PENDING });
            let citys = await SiteAPI.apiGetCall(`/amc/search?amcname=SBI`, {}, token);
            if (citys.Data) {
                dispatch({ type: types.FETCH_FETCH_FUNDS_SUCCESS, citys: citys.Data.city_master });
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
    
        case types.FETCH_FETCH_FUNDS_PENDING:{

            return {
                ...state,
                isFetching: true,
                error: null,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
            };
        }

        case types.FETCH_FETCH_FUNDS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
                error,
            };
        }
        
        case types.FETCH_FETCH_FUNDS_SUCCESS: {
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
