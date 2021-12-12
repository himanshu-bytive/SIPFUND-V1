import SiteAPI from "../services/SiteApis";
import { Alert } from "react-native";
const types = {
  LOGOUT: "LOGOUT",

  FETCH_FET_TRANSACTION_DETAILS_PENDING:
    "FETCH_FET_TRANSACTION_DETAILS_PENDING",
  FETCH_FET_TRANSACTION_DETAILS_SUCCESS:
    "FETCH_FET_TRANSACTION_DETAILS_SUCCESS",
  FETCH_FET_TRANSACTION_DETAILS_FAILURE:
    "FETCH_FET_TRANSACTION_DETAILS_FAILURE",

  FETCH_SCHEME_DETAILS_PENDING: "FETCH_SCHEME_DETAILS_PENDING",
  FETCH_SCHEME_DETAILS_FAILURE: "FETCH_SCHEME_DETAILS_FAILURE",
  FETCH_SCHEME_DETAILS_SUCCES: "FETCH_SCHEME_DETAILS_SUCCES",

  FETCH_AMC_CODE_SUCCES: "FETCH_AMC_CODE_SUCCES",

  SET_SELECTED_AMC_SCHEME: "SET_SELECTED_AMC_SCHEME",

  SWITCH_CHECKOUT_DETAILS: "SWITCH_CHECKOUT_DETAILS",

  SWITCH_EXTERNAL_CHECKOUT_DETAILS: "SWITCH_EXTERNAL_CHECKOUT_DETAILS",

  REDEEM_CHECKOUT_DETAILS: "REDEEM_CHECKOUT_DETAILS",

  REDEEM_EXTERNAL_CHECKOUT_DETAILS: "REDEEM_EXTERNAL_CHECKOUT_DETAILS",
};

export const SwitchActions = {
  fetchTransactionDetails: async (dispatch, params, token) => {
    dispatch({ type: types.FETCH_FET_TRANSACTION_DETAILS_PENDING });
    let data = await SiteAPI.apiPostCall("/operationData", params, token);
    if (data.error) {
      Alert.alert(data.message);
      dispatch({
        type: types.FETCH_FET_TRANSACTION_DETAILS_FAILURE,
        error: data.message,
      });
    } else {
      dispatch({
        type: types.FETCH_FET_TRANSACTION_DETAILS_SUCCESS,
        switchRes: data.responseString,
        externalSwitch: data.externalOPTrnx,
        validFlag: data.validFlag,
      });
    }
  },
  getSchemeList: async (dispatch, params, token) => {
    dispatch({ type: types.FETCH_SCHEME_DETAILS_PENDING });
    let data = await SiteAPI.apiGetCall(
      `/apiData/Product?AMCCODE=${params}`,
      {},
      token
    );
    if (data.error) {
      Alert.alert(data.message);
      dispatch({
        type: types.FETCH_SCHEME_DETAILS_FAILURE,
        error: data.message,
      });
    } else {
      // console.log("schemeDetails=", data.Data.product_master);
      dispatch({
        type: types.FETCH_SCHEME_DETAILS_SUCCES,
        schemeDetails: data.Data.product_master,
      });
    }
  },
  setAmcCode: (dispatch, params) => {
    // dispatch({type:types.FETCH_AMC_CODE_PENDING})
    dispatch({ type: types.FETCH_AMC_CODE_SUCCES, amcCode: params });
  },
  selectedAmcScheme: (dispatch, params) => {
    dispatch({
      type: types.SET_SELECTED_AMC_SCHEME,
      amcScheme: params.amcScheme,
      targetCode: params.targetCode,
      targetReinvest: params.targetReinvest,
    });
  },
  setSwitchCheckoutDetails: (dispatch, params) => {
    dispatch({
      type: types.SWITCH_CHECKOUT_DETAILS,
      switchCheckoutDetails: params,
      switchActive: "SWITCH",
    });
  },
  setSwitchExternalCheckoutDetails: (dispatch, params) => {
    dispatch({
      type: types.SWITCH_EXTERNAL_CHECKOUT_DETAILS,
      switchExternalCheckoutDetails: params,
      switchActive: "EXTERNAL",
    });
  },
  setRedeemCheckoutDetails: (dispatch, params) => {
    dispatch({
      type: types.REDEEM_CHECKOUT_DETAILS,
      redeemCheckoutDetails: params,
      redeemActive: "REDEEM",
    });
  },
  setRedeemExternalCheckoutDetails: (dispatch, params) => {
    dispatch({
      type: types.REDEEM_EXTERNAL_CHECKOUT_DETAILS,
      redeemExternalCheckoutDetails: params,
      redeemActive: "EXTERNAL",
    });
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
  switchRes: null,
  externalSwitch: null,
  user: null,
  token: null,
  schemeDetails: null,
  amcCode: null,
  amcScheme: null,
  targetCode: null,
  targetReinvest: null,
  switchCheckoutDetails: null,
  switchExternalCheckoutDetails: null,
  switchActive: null,
  redeemCheckoutDetails: null,
  redeemExternalCheckoutDetails: null,
  redeemActive: null,
};

export const reducer = (state = initialState, action) => {
  const {
    type,
    error,
    phone,
    signUpSteps,
    validFlag,
    user,
    token,
    switchRes,
    externalSwitch,
    schemeDetails,
    amcCode,
    amcScheme,
    switchCheckoutDetails,
    switchExternalCheckoutDetails,
    switchActive,
    targetCode,
    targetReinvest,
    redeemCheckoutDetails,
    redeemExternalCheckoutDetails,
    redeemActive,
  } = action;
  switch (type) {
    case types.FETCH_FET_TRANSACTION_DETAILS_PENDING:
    case types.FETCH_SCHEME_DETAILS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case types.FETCH_FET_TRANSACTION_DETAILS_FAILURE:
    case types.FETCH_SCHEME_DETAILS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case types.FETCH_FET_TRANSACTION_DETAILS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        switchRes,
        externalSwitch,
      };
    }

    case types.FETCH_SCHEME_DETAILS_SUCCES: {
      return {
        ...state,
        isFetching: false,
        error: null,
        schemeDetails,
      };
    }

    case types.FETCH_AMC_CODE_SUCCES: {
      return {
        ...state,
        amcCode,
      };
    }

    case types.SET_SELECTED_AMC_SCHEME: {
      return {
        ...state,
        amcScheme,
        targetCode,
        targetReinvest,
      };
    }

    case types.SWITCH_CHECKOUT_DETAILS: {
      return {
        ...state,
        switchCheckoutDetails,
        switchActive,
      };
    }

    case types.SWITCH_EXTERNAL_CHECKOUT_DETAILS: {
      return {
        ...state,
        switchExternalCheckoutDetails,
        switchActive,
      };
    }

    case types.REDEEM_CHECKOUT_DETAILS: {
      return {
        ...state,
        redeemCheckoutDetails,
        redeemActive,
      };
    }

    case types.REDEEM_EXTERNAL_CHECKOUT_DETAILS: {
      return {
        ...state,
        redeemExternalCheckoutDetails,
        redeemActive,
      };
    }

    case types.LOGOUT:
      return Object.assign({}, initialState, { phones: state.phones });
    default:
      return state;
  }
};
