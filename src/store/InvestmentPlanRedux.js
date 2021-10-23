import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    FETCH_PLAN_NAME_PENDING: "FETCH_PLAN_NAME_PENDING",
    FETCH_PLAN_NAME_SUCCESS: "FETCH_PLAN_NAME_SUCCESS",
    FETCH_PLAN_NAME_FAILURE: "FETCH_PLAN_NAME_FAILURE",

    FETCH_INVESTMENT_PLAN_PENDING: "FETCH_INVESTMENT_PLAN_PENDING",
    FETCH_INVESTMENT_PLAN_SUCCESS: "FETCH_INVESTMENT_PLAN_SUCCESS",
    FETCH_INVESTMENT_PLAN_FAILURE: "FETCH_INVESTMENT_PLAN_FAILURE",

    FETCH_INVESTMENT_CONFIG: "FETCH_INVESTMENT_CONFIG",

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
    allPlans: async (dispatch, token) => {
        dispatch({ type: types.FETCH_PLAN_NAME_PENDING });
        let data = await SiteAPI.apiGetCall(`/investmentPlans/allInvestmentPlans`, {}, token);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_PLAN_NAME_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_PLAN_NAME_SUCCESS, investments: data.response });
        }
    },
    investmentPlans: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_INVESTMENT_PLAN_PENDING });
        let data = await SiteAPI.apiPostCall(`/investmentPlans/singlePlan`, params, token);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_INVESTMENT_PLAN_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_INVESTMENT_PLAN_SUCCESS, investment: data.response });
        }
    },
    investmentConfig: async (dispatch, configs) => {
        dispatch({ type: types.FETCH_INVESTMENT_CONFIG, configs });
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
    investments: [],
    investment: null,
    configs: {},
    incomes: [],
    states: [],
    citys: [],
    pincodeInfo: null,
    accountTypes: [],
    banks: [],
    bankDetails: {},
    userInfo: null,
    data: null,
    addSuccess: false,
    updateSuccess: false,
    uploadSuccess: false,
};

export const reducer = (state = initialState, action) => {
    const { type, error, investments, investment, configs, citys, accountTypes, banks, bankDetails, userInfo, pincodeInfo, data } = action;
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
                investments
            };
        }
        case types.FETCH_INVESTMENT_PLAN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                investment
            };
        }
        case types.FETCH_INVESTMENT_CONFIG: {
            return {
                ...state,
                isFetching: false,
                error: null,
                configs
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
