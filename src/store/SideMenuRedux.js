import SiteAPI from "../services/SiteApis";
import { Alert } from "react-native";
import axios from "axios";

const types = {
  RESETDATA: "RESETDATA",

  FETCH_DATA_PENDING: "FETCH_DATA_PENDING",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE",

  FETCH_ADD_PENDING: "FETCH_ADD_PENDING",
  FETCH_ADD_SUCCESS: "FETCH_ADD_SUCCESS",
  FETCH_ADD_FAILURE: "FETCH_ADD_FAILURE",

  FETCH_UPDATE_PENDING: "FETCH_UPDATE_PENDING",
  FETCH_UPDATE_SUCCESS: "FETCH_UPDATE_SUCCESS",
  FETCH_UPDATE_FAILURE: "FETCH_UPDATE_FAILURE",

  FETCH_REFER_PENDING: "FETCH_REFER_PENDING",
  FETCH_REFER_SUCCESS: "FETCH_REFER_SUCCESS",
  FETCH_REFER_FAILURE: "FETCH_REFER_FAILURE",

  FETCH_REFER_PASS_PENDING: "FETCH_REFER_PASS_PENDING",
  FETCH_REFER_PASS_SUCCESS: "FETCH_REFER_PASS_SUCCESS",
  FETCH_REFER_PASS_FAILURE: "FETCH_REFER_PASS_FAILURE",

  FETCH_REFERRAL_PENDING: "FETCH_REFERRAL_PENDING",
  FETCH_REFERRAL_SUCCESS: "FETCH_REFERRAL_SUCCESS",
  FETCH_REFERRAL_FAILURE: "FETCH_REFERRAL_FAILURE",
};
export const SideMenuActions = {
  resetData() {
    return { type: types.RESETDATA };
  },
  getrm: async (dispatch, tokan) => {
    dispatch({ type: types.FETCH_DATA_PENDING });
    let data = await SiteAPI.apiGetCall("/request-static/rm", {}, tokan);
    if (data.error) {
      //Alert.alert(data.message);
      dispatch({ type: types.FETCH_DATA_FAILURE, error: data.message });
    } else {
      dispatch({ type: types.FETCH_DATA_SUCCESS, rmDetails: data });
    }
  },
  inquiry: async (dispatch, params, tokan) => {
    dispatch({ type: types.FETCH_ADD_PENDING });
    let data = await SiteAPI.apiPostCall(
      "/request-static/enquiry",
      params,
      tokan
    );
    if (data.error) {
      Alert.alert(data.message);
      dispatch({ type: types.FETCH_ADD_FAILURE, error: data.message });
    } else {
      alert(data?.responseString);
      dispatch({ type: types.FETCH_ADD_SUCCESS, details: data.output });
    }
  },
  updateInn: async (dispatch, params, tokan) => {
    dispatch({ type: types.FETCH_UPDATE_PENDING });
    let data = await SiteAPI.apiPutCall("/user", params, tokan);
    console.log(data);
    if (data.error) {
      Alert.alert(data.message);
      dispatch({ type: types.FETCH_UPDATE_FAILURE, error: data.message });
    } else {
      dispatch({ type: types.FETCH_UPDATE_SUCCESS, details: data.output });
    }
  },
  getRefer: async (dispatch, tokan) => {
    dispatch({ type: types.FETCH_REFER_PENDING });
    let data = await SiteAPI.apiGetCall(
      "/user-transactions/credit-debit",
      {},
      tokan
    );
    let dataConfig = await SiteAPI.apiGetCall("/referral-config", {}, tokan);
    console.log(data, dataConfig, "abcd");
    if (data.error || dataConfig.error) {
      Alert.alert(data.message);
      dispatch({ type: types.FETCH_REFER_FAILURE, error: data.message });
    } else {
      dispatch({
        type: types.FETCH_REFER_SUCCESS,
        refers: data.data,
        refersConfig: dataConfig.data,
      });
    }
  },
  passRefer: async (dispatch, tokan) => {
    dispatch({ type: types.FETCH_REFER_PASS_PENDING });
    let data = await SiteAPI.apiPostCall(
      "/user-transactions/credit-debit",
      {},
      tokan
    );
    if (data.error) {
      Alert.alert(data.message);
      dispatch({ type: types.FETCH_REFER_PASS_FAILURE, error: data.message });
    } else {
      dispatch({ type: types.FETCH_REFER_PASS_SUCCESS });
    }
  },
  getReferralLink: async (dispatch, params) => {
    console.log("PARAMS=", params);
    dispatch({ type: types.FETCH_REFERRAL_PENDING });
    try {
      let data = await axios.post(
        `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDuY1P9kTWmzZq-rSPrU_wKO6MZYAT8qZ4`,
        params
      );
      console.log("DATA=", data);
      dispatch({
        type: types.FETCH_REFERRAL_SUCCESS,
        referralLink: data.data.shortLink,
      });
    } catch (err) {
      console.log("ERR=", err.message);

      Alert.alert(err.message);
      dispatch({ type: types.FETCH_REFERRAL_FAILURE, error: err.message });
    }
  },
};

const initialState = {
  isFetching: false,
  error: null,
  rmDetails: null,
  details: null,
  refers: null,
  refersConfig: null,
  referralLink: null,
};

export const reducer = (state = initialState, action) => {
  const {
    type,
    error,
    rmDetails,
    details,
    refers,
    refersConfig,
    referralLink,
  } = action;
  switch (type) {
    case types.FETCH_REFER_PASS_PENDING:
    case types.FETCH_REFER_PENDING:
    case types.FETCH_UPDATE_PENDING:
    case types.FETCH_ADD_PENDING:
    case types.FETCH_DATA_PENDING:
    case types.FETCH_REFERRAL_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case types.FETCH_REFER_PASS_FAILURE:
    case types.FETCH_REFER_FAILURE:
    case types.FETCH_UPDATE_FAILURE:
    case types.FETCH_ADD_FAILURE:
    case types.FETCH_DATA_FAILURE:
    case types.FETCH_REFERRAL_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case types.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        rmDetails,
      };
    }
    case types.FETCH_ADD_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        details,
      };
    }
    case types.FETCH_UPDATE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        details,
      };
    }
    case types.FETCH_REFER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        refers,
        refersConfig,
      };
    }

    case types.FETCH_REFERRAL_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        referralLink,
      };
    }

    case types.RESETDATA:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
