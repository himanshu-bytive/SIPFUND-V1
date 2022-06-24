import SiteAPI from "../services/SiteApis";
import { Alert, Linking } from "react-native";
const types = {
  FETCH_EMANDATE_REGISTRATION_PENDING: "FETCH_EMANDATE_REGISTRATION_PENDING",
  FETCH_EMANDATE_REGISTRATION_SUCCESS: "FETCH_EMANDATE_REGISTRATION_SUCCESS",
  FETCH_EMANDATE_REGISTRATION_FAILURE: "FETCH_EMANDATE_REGISTRATION_FAILURE",

  FETCH_EMANDATE_OPTIONS_PENDING: "FETCH_EMANDATE_OPTIONS_PENDING",
  FETCH_EMANDATE_OPTIONS_SUCCESS: "FETCH_EMANDATE_OPTIONS_SUCCESS",
  FETCH_EMANDATE_OPTIONS_FAILURE: "FETCH_EMANDATE_OPTIONS_FAILURE",
};

export const EmandateActions = {
  emandateOptions: async (dispatch, token) => {
    dispatch({ type: types.FETCH_EMANDATE_OPTIONS_PENDING });
    let data = await SiteAPI.apiGetCall(`/emandateOptions/`, {}, token);
    if (data.error) {
      Alert.alert(data.message);
      dispatch({
        type: types.FETCH_EMANDATE_OPTIONS_FAILURE,
        error: data.message,
      });
    } else {
      dispatch({
        type: types.FETCH_EMANDATE_OPTIONS_SUCCESS,
        emandateLists: data.response,
      });
    }
  },
  emandateRegistration: async (dispatch, params, token) => {
    dispatch({ type: types.FETCH_EMANDATE_REGISTRATION_PENDING });
    let data = await SiteAPI.apiPostCall(
      `/apiData/ACHMANDATEREGISTRATIONS`,
      params,
      token
    );
    if (data.error) {
      Alert.alert(data.message);
      dispatch({
        type: types.FETCH_EMANDATE_REGISTRATION_FAILURE,
        error: data.message,
      });
    } else {
      //Linking.openURL(data.Data[0].eMandatelink);
      dispatch({
        type: types.FETCH_EMANDATE_REGISTRATION_SUCCESS,
        emandateDetails: data.response,
        emandateLink: data.Data[0].eMandatelink,
      });
    }
  },
  clearEmandateLink: async (dispatch) => {
    dispatch({ emandateLink: "" });
  },
};

const initialState = {
  isFetching: false,
  error: null,
  emandateLists: [],
  emandateDetails: null,
  emandateLink: null,
};

export const reducer = (state = initialState, action) => {
  const { type, error, emandateLists, emandateDetails, emandateLink } = action;
  switch (type) {
    case types.FETCH_EMANDATE_REGISTRATION_PENDING:
    case types.FETCH_EMANDATE_OPTIONS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case types.FETCH_EMANDATE_REGISTRATION_FAILURE:
    case types.FETCH_EMANDATE_OPTIONS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case types.FETCH_EMANDATE_REGISTRATION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        emandateDetails,
        emandateLink,
      };
    }
    case types.FETCH_EMANDATE_OPTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        emandateLists,
      };
    }

    default:
      return state;
  }
};
