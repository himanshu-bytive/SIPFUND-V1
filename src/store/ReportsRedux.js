import SiteAPI from "../services/SiteApis";
import { Alert, Linking } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Buffer } from "buffer";
//import * as Permissions from "expo-permissions";
//import * as MediaLibrary from "expo-media-library";
import apiBaseUrl from "../common/Config";
import axios from "axios";
const types = {
  FETCH_REPORT_SUMMARY_PENDING: "FETCH_REPORT_SUMMARY_PENDING",
  FETCH_REPORT_SUMMARY_SUCCESS: "FETCH_REPORT_SUMMARY_SUCCESS",
  FETCH_REPORT_SUMMARY_FAILURE: "FETCH_REPORT_SUMMARY_FAILURE",
};

function getFileUri(name) {
  return FileSystem.documentDirectory + `${encodeURI(name)}.pdf`;
}

export const ReportsActions = {
  downloadReport: async (dispatch, params, token) => {
    dispatch({ type: types.FETCH_REPORT_SUMMARY_PENDING });
    let data = await SiteAPI.apiGetCall(`/reports/${params}`, {}, token);
    if (data.error) {
      Alert.alert(data.message);
      dispatch({
        type: types.FETCH_REPORT_SUMMARY_FAILURE,
        error: data.message,
        urls: null,
      });
    } else {
      dispatch({ type: types.FETCH_REPORT_SUMMARY_SUCCESS, urls: data });
      if (data.path) {
        Linking.openURL(data.path);
      }
    }
  },
  downloadReportWithParams: async (dispatch, link, params, token) => {
    dispatch({ type: types.FETCH_REPORT_SUMMARY_PENDING });
    let data = await SiteAPI.apiGetCall(`/reports/${link}`, params, token);
    if (data.error) {
      Alert.alert(data.message);
      dispatch({
        type: types.FETCH_REPORT_SUMMARY_FAILURE,
        error: data.message,
        urls: null,
      });
      console.log(data);
    } else {
      //dispatch({ type: types.FETCH_REPORT_SUMMARY_SUCCESS, urls: data });
      //if (data.path) {
      //Linking.openURL(data.path);
      //}
      console.log(data);
    }
  },
};

const initialState = {
  isFetching: false,
  error: null,
  urls: null,
};

export const reducer = (state = initialState, action) => {
  const { type, error, urls } = action;
  switch (type) {
    case types.FETCH_REPORT_SUMMARY_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case types.FETCH_REPORT_SUMMARY_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error,
        urls,
      };
    }
    case types.FETCH_REPORT_SUMMARY_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        urls,
      };
    }
    default:
      return state;
  }
};
