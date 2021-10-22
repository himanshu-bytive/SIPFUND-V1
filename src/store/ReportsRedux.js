import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {
    
    FETCH_REPORT_SUMMARY_PENDING: "FETCH_REPORT_SUMMARY_PENDING",
    FETCH_REPORT_SUMMARY_SUCCESS: "FETCH_REPORT_SUMMARY_SUCCESS",
    FETCH_REPORT_SUMMARY_FAILURE: "FETCH_REPORT_SUMMARY_FAILURE",

    FETCH_REPORT_DETAILS_PENDING: "FETCH_REPORT_DETAILS_PENDING",
    FETCH_REPORT_DETAILS_SUCCESS: "FETCH_REPORT_DETAILS_SUCCESS",
    FETCH_REPORT_DETAILS_FAILURE: "FETCH_REPORT_DETAILS_FAILURE",

    FETCH_FREE_UNITS_PENDING: "FETCH_FREE_UNITS_PENDING",
    FETCH_FREE_UNITS_SUCCESS: "FETCH_FREE_UNITS_SUCCESS",
    FETCH_FREE_UNITS_FAILURE: "FETCH_FREE_UNITS_FAILURE",

};

export const ReportsActions = {
    
    reportSummary: async (dispatch, token) => {
        dispatch({ type: types.FETCH_REPORT_SUMMARY_PENDING });
        let documents = await SiteAPI.apiGetCall(`/reports/live-portfolio-report-summary`, {}, token);
        if (documents.responseString) {
            dispatch({ type: types.FETCH_REPORT_SUMMARY_SUCCESS, documents: documents });
        }
    },
    reportDetails: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_REPORT_DETAILS_PENDING });
            let citys = await SiteAPI.apiGetCall(`/reports/live-portfolio-report-details`, {}, token);
            if (citys.Data) {
                dispatch({ type: types.FETCH_REPORT_DETAILS_SUCCESS, citys: citys.Data.city_master });
            }
        }
    },
    freeUnits: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_FREE_UNITS_PENDING });
            let pincodes = await SiteAPI.apiGetCall(`/reports/load-free-unit-report`, {}, token);
            if (pincodes.data) {
                dispatch({ type: types.FETCH_FREE_UNITS_SUCCESS, pincodeInfo: pincodes.data });
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
        case types.FETCH_REPORT_SUMMARY_PENDING:
        case types.FETCH_REPORT_DETAILS_PENDING:
        case types.FETCH_FREE_UNITS_PENDING:{

            return {
                ...state,
                isFetching: true,
                error: null,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
            };
        }

        case types.FETCH_REPORT_SUMMARY_FAILURE:
        case types.FETCH_FREE_UNITS_FAILURE:
        case types.FETCH_REPORT_DETAILS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
                error,
            };
        }
        case types.FETCH_REPORT_SUMMARY_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                documents
            };
        }
        case types.FETCH_REPORT_DETAILS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                citys
            };
        }
        case types.FETCH_FREE_UNITS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                pincodeInfo
            };
        }
    
        default:
            return state;
    }
};
