import SiteAPI from "../services/SiteApis";
import { Alert } from "react-native";
const types = {
  FETCH_GOAL_DETAILS_PENDING: "FETCH_GOAL_DETAILS_PENDING",
  FETCH_GOAL_DETAILS_SUCCESS: "FETCH_GOAL_DETAILS_SUCCESS",
  FETCH_GOAL_DETAILS_FAILURE: "FETCH_GOAL_DETAILS_FAILURE",

  FETCH_SINGLE_DETAILS_PENDING: "FETCH_SINGLE_DETAILS_PENDING",
  FETCH_SINGLE_DETAILS_SUCCESS: "FETCH_SINGLE_DETAILS_SUCCESS",
  FETCH_SINGLE_DETAILS_FAILURE: "FETCH_SINGLE_DETAILS_FAILURE",

  FETCH_MY_CONFIG: "FETCH_MY_CONFIG",
  FETCH_MY_GOLES: "FETCH_MY_GOLES",

  FETCH_GOALUSER_PENDING: "FETCH_GOALUSER_PENDING",
  FETCH_GOALUSER_SUCCESS: "FETCH_GOALUSER_SUCCESS",
  FETCH_GOALUSER_FAILURE: "FETCH_GOALUSER_FAILURE",

  FETCH_SAVED_USER_PENDING: "FETCH_SAVED_USER_PENDING",
  FETCH_SAVED_USER_SUCCESS: "FETCH_SAVED_USER_SUCCESS",
  FETCH_SAVED_USER_FAILURE: "FETCH_SAVED_USER_FAILURE",

  FETCH_SINGLESAVED_USER_PENDING: "FETCH_SINGLESAVED_USER_PENDING",
  FETCH_SINGLESAVED_USER_SUCCESS: "FETCH_SINGLESAVED_USER_SUCCESS",
  FETCH_SINGLESAVED_USER_FAILURE: "FETCH_SINGLESAVED_USER_FAILURE",

  FETCH_SUMMARY_PENDING: "FETCH_SUMMARY_PENDING",
  FETCH_SUMMARY_SUCCESS: "FETCH_SUMMARY_SUCCESS",
  FETCH_SUMMARY_FAILURE: "FETCH_SUMMARY_FAILURE",

  FETCH_SUMMARY_DETAILS: "FETCH_SUMMARY_DETAILS",
  FETCH_SUMMARY_DETAILS_INVESTMENT: "FETCH_SUMMARY_DETAILS_INVESTMENT",

  SET_PLAN_YOUR_GOALS_DETAILS: "SET_PLAN_YOUR_GOAL_DETAILS",
};

export const GoalsActions = {
  goalDetails: async (dispatch, token) => {
    dispatch({ type: types.FETCH_GOAL_DETAILS_PENDING });
    let data = await SiteAPI.apiGetCall(
      `/plan_your_goals/allPlansGoals`,
      {},
      token
    );
    if (data.error) {
      Alert.alert(data.message);
      dispatch({ type: types.FETCH_GOAL_DETAILS_FAILURE, error: data.message });
    } else {
      dispatch({
        type: types.FETCH_GOAL_DETAILS_SUCCESS,
        goals: data.response,
      });
    }
  },
  singleDetails: async (dispatch, params, token) => {
    dispatch({ type: types.FETCH_SINGLE_DETAILS_PENDING });
    let data = await SiteAPI.apiPostCall(
      `/plan_your_goals/planInfo`,
      { goal: params.goal, years: 5 },
      token
    );
    if (data.error) {
      Alert.alert(data.message);
      dispatch({
        type: types.FETCH_SINGLE_DETAILS_FAILURE,
        error: data.message,
      });
    } else {
      dispatch({
        type: types.FETCH_SINGLE_DETAILS_SUCCESS,
        goalDetail: data.response,
        mygolelist: data.response.schemesInfo,
      });
    }
  },
  golesConfig: async (dispatch, configs) => {
    dispatch({ type: types.FETCH_MY_CONFIG, configs });
  },
  myGoles: async (dispatch, mygolelist) => {
    dispatch({ type: types.FETCH_MY_GOLES, mygolelist });
  },
  goalUser: async (dispatch, code, token) => {
    if (code) {
      dispatch({ type: types.FETCH_GOALUSER_PENDING });
      let pincodes = await SiteAPI.apiPostCall(
        `/plan_your_goals/userCreate`,
        {},
        token
      );
      if (pincodes.data) {
        dispatch({
          type: types.FETCH_GOALUSER_SUCCESS,
          pincodeInfo: pincodes.data,
        });
      }
    }
  },
  savedUser: async (dispatch, code, token) => {
    if (code) {
      dispatch({ type: types.FETCH_SAVED_USER_PENDING });
      let banks = await SiteAPI.apiPostCall(
        `/plan_your_goals/getSingleUserDetails`,
        {},
        token
      );
      if (banks.validFlag) {
        dispatch({
          type: types.FETCH_SAVED_USER_SUCCESS,
          bankDetails: banks.responseString,
        });
      }
    }
  },
  singleSavedUser: async (dispatch, code, token) => {
    if (code) {
      dispatch({ type: types.FETCH_SINGLESAVED_USER_PENDING });
      let banks = await SiteAPI.apiPostCall(
        `/plan_your_goals/getSingleUsersSinglePlan`,
        {},
        token
      );
      if (banks.validFlag) {
        dispatch({
          type: types.FETCH_SINGLESAVED_USER_SUCCESS,
          bankDetails: banks.responseString,
        });
      }
    }
  },
  goalSummary: async (dispatch, params, token) => {
    dispatch({ type: types.FETCH_SUMMARY_PENDING });
    let data = await SiteAPI.apiPostCall(
      `/goalsAndinvestmentHoldings`,
      params,
      token
    );
    if (data.error) {
      Alert.alert(data.message);
      dispatch({ type: types.FETCH_SUMMARY_FAILURE, error: data.message });
    } else {
      dispatch({ type: types.FETCH_SUMMARY_SUCCESS, summary: data });
    }
  },
  goalSummaryDetails: async (dispatch, summaryDetails) => {
    dispatch({ type: types.FETCH_SUMMARY_DETAILS, summaryDetails });
  },
  InvestmentSummaryDetails: async (dispatch, summaryInvestmentDetails) => {
    dispatch({
      type: types.FETCH_SUMMARY_DETAILS_INVESTMENT,
      summaryInvestmentDetails,
    });
  },
  setPlanYourGoalDetails: (dispatch, props) => {
    dispatch({
      type: types.SET_PLAN_YOUR_GOALS_DETAILS,
      planYourGoalsDetails: props,
    });
  },
};

const initialState = {
  isFetching: false,
  error: null,
  goals: [],
  goalDetail: null,
  configs: {},
  mygolelist: [],
  summary: {},
  summaryDetails: {},
  summaryInvestmentDetails: {},
  planYourGoalsDetails: null,
};

export const reducer = (state = initialState, action) => {
  const {
    type,
    error,
    goals,
    goalDetail,
    configs,
    mygolelist,
    summary,
    summaryDetails,
    summaryInvestmentDetails,
    planYourGoalsDetails,
  } = action;
  switch (type) {
    case types.FETCH_SUMMARY_PENDING:
    case types.FETCH_GOAL_DETAILS_PENDING:
    case types.FETCH_SINGLE_DETAILS_PENDING:
    case types.FETCH_SINGLESAVED_USER_PENDING:
    case types.FETCH_GOALUSER_PENDING:
    case types.FETCH_SAVED_USER_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case types.FETCH_SUMMARY_FAILURE:
    case types.FETCH_GOAL_DETAILS_FAILURE:
    case types.FETCH_SINGLESAVED_USER_FAILURE:
    case types.FETCH_GOALUSER_FAILURE:
    case types.FETCH_SAVED_USER_FAILURE:
    case types.FETCH_SINGLE_DETAILS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case types.FETCH_GOAL_DETAILS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        goals,
      };
    }
    case types.FETCH_SINGLE_DETAILS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        goalDetail,
        mygolelist,
      };
    }
    case types.FETCH_MY_CONFIG: {
      return {
        ...state,
        isFetching: false,
        error: null,
        configs,
      };
    }
    case types.FETCH_MY_GOLES: {
      return {
        ...state,
        isFetching: false,
        error: null,
        mygolelist,
      };
    }
    case types.FETCH_GOALUSER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    }
    case types.FETCH_SAVED_USER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    }
    case types.FETCH_SINGLESAVED_USER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    }
    case types.FETCH_SUMMARY_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        summary,
      };
    }
    case types.FETCH_SUMMARY_DETAILS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        summaryDetails,
      };
    }
    case types.FETCH_SUMMARY_DETAILS_INVESTMENT: {
      return {
        ...state,
        isFetching: false,
        error: null,
        summaryInvestmentDetails,
      };
    }

    case types.SET_PLAN_YOUR_GOALS_DETAILS: {
      return {
        ...state,
        planYourGoalsDetails,
      };
    }

    default:
      return state;
  }
};
