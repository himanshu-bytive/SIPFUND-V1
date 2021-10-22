import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {
    
    FETCH_PLAN_NAME_PENDING: "FETCH_PLAN_NAME_PENDING",
    FETCH_PLAN_NAME_SUCCESS: "FETCH_PLAN_NAME_SUCCESS",
    FETCH_PLAN_NAME_FAILURE: "FETCH_PLAN_NAME_FAILURE",

    FETCH_INVESTMENT_PLAN_PENDING: "FETCH_INVESTMENT_PLAN_PENDING",
    FETCH_INVESTMENT_PLAN_SUCCESS: "FETCH_INVESTMENT_PLAN_SUCCESS",
    FETCH_INVESTMENT_PLAN_FAILURE: "FETCH_INVESTMENT_PLAN_FAILURE",

    FETCH_NEW_INVESTMENT_PENDING: "FETCH_NEW_INVESTMENT_PENDING",
    FETCH_NEW_INVESTMENT_SUCCESS: "FETCH_NEW_INVESTMENT_SUCCESS",
    FETCH_NEW_INVESTMENT_FAILURE: "FETCH_NEW_INVESTMENT_FAILURE",

    FETCH_USER_INVESTMENT_PENDING: "FETCH_USER_INVESTMENT_PENDING",
    FETCH_USER_INVESTMENT_SUCCESS: "FETCH_USER_INVESTMENT_SUCCESS",
    FETCH_USER_INVESTMENT_FAILURE: "FETCH_USER_INVESTMENT_FAILURE",

    FETCH_INDIVIDUAL_INVESTMENT_PENDING: "FETCH_INDIVIDUAL_INVESTMENT_PENDING",
    FETCH_INDIVIDUAL_INVESTMENT_SUCCESS: "FETCH_INDIVIDUAL_INVESTMENT_SUCCESS",
    FETCH_INDIVIDUAL_INVESTMENT_FAILURE: "FETCH_INDIVIDUAL_INVESTMENT_FAILURE",
};

export const InvestmentPlanActions = {
    
    planName: async (dispatch, token) => {
        dispatch({ type: types.FETCH_PLAN_NAME_PENDING });
        let documents = await SiteAPI.apiGetCall(`/investmentPlans/allInvestmentPlans`, {}, token);
        if (documents.responseString) {
            dispatch({ type: types.FETCH_PLAN_NAME_SUCCESS, documents: documents });
        }
    },
    investmentPlans: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_INVESTMENT_PLAN_PENDING });
            let citys = await SiteAPI.apiPostCall(`/investmentPlans/singlePlan`, {}, token);
            if (citys.Data) {
                dispatch({ type: types.FETCH_INVESTMENT_PLAN_SUCCESS, citys: citys.Data.city_master });
            }
        }
    },
    newInvestment: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_NEW_INVESTMENT_PENDING });
            let pincodes = await SiteAPI.apiPostCall(`/investmentPlans/createPlan`, {}, token);
            if (pincodes.data) {
                dispatch({ type: types.FETCH_NEW_INVESTMENT_SUCCESS, pincodeInfo: pincodes.data });
            }
        }
    },
    userInvetment: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_USER_INVESTMENT_PENDING });
            let banks = await SiteAPI.apiPostCall(`/investmentPlans/userinfo`, {}, token);
            if (banks.validFlag) {
                dispatch({ type: types.FETCH_USER_INVESTMENT_SUCCESS, bankDetails: banks.responseString });
            }
        }
    },
    individualInvestment: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_INDIVIDUAL_INVESTMENT_PENDING });
            let banks = await SiteAPI.apiPostCall(`/investmentPlans/usersingleplaninfo`, {}, token);
            if (banks.validFlag) {
                dispatch({ type: types.FETCH_INDIVIDUAL_INVESTMENT_SUCCESS, bankDetails: banks.responseString });
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
        case types.FETCH_PLAN_NAME_PENDING:
        case types.FETCH_INVESTMENT_PLAN_PENDING:
        case types.FETCH_INDIVIDUAL_INVESTMENT_PENDING:
        case types.FETCH_NEW_INVESTMENT_PENDING:
        case types.FETCH_USER_INVESTMENT_PENDING: {

            return {
                ...state,
                isFetching: true,
                error: null,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
            };
        }

        case types.FETCH_PLAN_NAME_FAILURE:
        case types.FETCH_INDIVIDUAL_INVESTMENT_FAILURE:
        case types.FETCH_NEW_INVESTMENT_FAILURE:
        case types.FETCH_USER_INVESTMENT_FAILURE:
        case types.FETCH_INVESTMENT_PLAN_FAILURE: {
            return {
                ...state,
                isFetching: false,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
                error,
            };
        }
        case types.FETCH_PLAN_NAME_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                documents
            };
        }
        case types.FETCH_INVESTMENT_PLAN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                citys
            };
        }
        case types.FETCH_NEW_INVESTMENT_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                pincodeInfo
            };
        }
        case types.FETCH_USER_INVESTMENT_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                bankDetails
            };
        }
        case types.FETCH_INDIVIDUAL_INVESTMENT_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                addSuccess: true
            };
        }
    
        default:
            return state;
    }
};
