import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    FETCH_GOAL_DETAILS_PENDING: "FETCH_GOAL_DETAILS_PENDING",
    FETCH_GOAL_DETAILS_SUCCESS: "FETCH_GOAL_DETAILS_SUCCESS",
    FETCH_GOAL_DETAILS_FAILURE: "FETCH_GOAL_DETAILS_FAILURE",

    FETCH_SINGLE_DETAILS_PENDING: "FETCH_SINGLE_DETAILS_PENDING",
    FETCH_SINGLE_DETAILS_SUCCESS: "FETCH_SINGLE_DETAILS_SUCCESS",
    FETCH_SINGLE_DETAILS_FAILURE: "FETCH_SINGLE_DETAILS_FAILURE",

    FETCH_GOALUSER_PENDING: "FETCH_GOALUSER_PENDING",
    FETCH_GOALUSER_SUCCESS: "FETCH_GOALUSER_SUCCESS",
    FETCH_GOALUSER_FAILURE: "FETCH_GOALUSER_FAILURE",

    FETCH_SAVED_USER_PENDING: "FETCH_SAVED_USER_PENDING",
    FETCH_SAVED_USER_SUCCESS: "FETCH_SAVED_USER_SUCCESS",
    FETCH_SAVED_USER_FAILURE: "FETCH_SAVED_USER_FAILURE",

    FETCH_SINGLESAVED_USER_PENDING: "FETCH_SINGLESAVED_USER_PENDING",
    FETCH_SINGLESAVED_USER_SUCCESS: "FETCH_SINGLESAVED_USER_SUCCESS",
    FETCH_SINGLESAVED_USER_FAILURE: "FETCH_SINGLESAVED_USER_FAILURE",
};

export const GoalsActions = {
    goalDetails: async (dispatch, token) => {
        dispatch({ type: types.FETCH_GOAL_DETAILS_PENDING });
        let data = await SiteAPI.apiGetCall(`/plan_your_goals/allPlansGoals`, {}, token);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_GOAL_DETAILS_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_GOAL_DETAILS_SUCCESS, goals: data.response });
        }
    },
    singleDetails: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_SINGLE_DETAILS_PENDING });
        let data = await SiteAPI.apiPostCall(`/plan_your_goals/planInfo`, { "goal": params.goal, "years": 5 }, token);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_SINGLE_DETAILS_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_SINGLE_DETAILS_SUCCESS, goalDetail: data.response });
        }
    },
    goalUser: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_GOALUSER_PENDING });
            let pincodes = await SiteAPI.apiPostCall(`/plan_your_goals/userCreate`, {}, token);
            if (pincodes.data) {
                dispatch({ type: types.FETCH_GOALUSER_SUCCESS, pincodeInfo: pincodes.data });
            }
        }
    },
    savedUser: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_SAVED_USER_PENDING });
            let banks = await SiteAPI.apiPostCall(`/plan_your_goals/getSingleUserDetails`, {}, token);
            if (banks.validFlag) {
                dispatch({ type: types.FETCH_SAVED_USER_SUCCESS, bankDetails: banks.responseString });
            }
        }
    },
    singleSavedUser: async (dispatch, code, token) => {
        if (code) {
            dispatch({ type: types.FETCH_SINGLESAVED_USER_PENDING });
            let banks = await SiteAPI.apiPostCall(`/plan_your_goals/getSingleUsersSinglePlan`, {}, token);
            if (banks.validFlag) {
                dispatch({ type: types.FETCH_SINGLESAVED_USER_SUCCESS, bankDetails: banks.responseString });
            }
        }

    },

};

const initialState = {
    isFetching: false,
    error: null,
    goals: [],
    goalDetail: null,
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
    const { type, error, goals, goalDetail, states, citys, accountTypes, banks, bankDetails, userInfo, pincodeInfo, data } = action;
    switch (type) {
        case types.FETCH_GOAL_DETAILS_PENDING:
        case types.FETCH_SINGLE_DETAILS_PENDING:
        case types.FETCH_SINGLESAVED_USER_PENDING:
        case types.FETCH_GOALUSER_PENDING:
        case types.FETCH_SAVED_USER_PENDING: {

            return {
                ...state,
                isFetching: true,
                error: null,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
            };
        }

        case types.FETCH_GOAL_DETAILS_FAILURE:
        case types.FETCH_SINGLESAVED_USER_FAILURE:
        case types.FETCH_GOALUSER_FAILURE:
        case types.FETCH_SAVED_USER_FAILURE:
        case types.FETCH_SINGLE_DETAILS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
                error,
            };
        }
        case types.FETCH_GOAL_DETAILS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                goals
            };
        }
        case types.FETCH_SINGLE_DETAILS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                goalDetail
            };
        }
        case types.FETCH_GOALUSER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                pincodeInfo
            };
        }
        case types.FETCH_SAVED_USER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                bankDetails
            };
        }
        case types.FETCH_SINGLESAVED_USER_SUCCESS: {
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
