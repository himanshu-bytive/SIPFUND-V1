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
};

export const SwitchActions = {
  // fetchTransactionDetails: async (dispatch, params) => {
  //     dispatch({ type: types.FETCH_FET_TRANSACTION_DETAILS_PENDING });
  //     let auth = await SiteAPI.apiPostCall('/operationData', params);
  //     if (auth.error) {
  //         Alert.alert(auth.message)
  //         dispatch({ type: types.FETCH_FET_TRANSACTION_DETAILS_FAILURE, error: auth.message });
  //     } else {
  //         Alert.alert(auth.responseString)
  //         dispatch({ type: types.FETCH_FET_TRANSACTION_DETAILS_SUCCESS, phone: params.mobileNo, signUpSteps: auth.signUpSteps, validFlag: auth.validFlag });
  //     }
  // },
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
      //   Alert.alert(data.responseString);
      //   console.log("token=", token);
      //   console.log("params=", params);
      //   console.log("data=", data);
      dispatch({
        type: types.FETCH_FET_TRANSACTION_DETAILS_SUCCESS,
        switchRes: data.responseString,
        externalSwitch: data.externalOPTrnx,
        validFlag: data.validFlag,
      });
    }
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
  } = action;
  switch (type) {
    case types.FETCH_FET_TRANSACTION_DETAILS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case types.FETCH_FET_TRANSACTION_DETAILS_FAILURE: {
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

    case types.LOGOUT:
      return Object.assign({}, initialState, { phones: state.phones });
    default:
      return state;
  }
};
