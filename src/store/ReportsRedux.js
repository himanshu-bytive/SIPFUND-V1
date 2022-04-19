import SiteAPI from "../services/SiteApis";
import { Alert, Linking, ToastAndroid } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Buffer } from "buffer";
//import * as Permissions from "expo-permissions";
//import * as MediaLibrary from "expo-media-library";
import apiBaseUrl from "../common/Config";
import axios from "axios";
import RNFetchBlob from "react-native-fetch-blob";
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
        //Linking.openURL(data.path);
        //let dirs = RNFetchBlob.fs.dirs;
        RNFetchBlob.config({
          addAndroidDownloads: {
            useDownloadManager: true, // <-- this is the only thing required
            // Optional, override notification setting (default to true)
            notification: true,
            // Optional, but recommended since android DownloadManager will fail when
            // the url does not contains a file extension, by default the mime type will be text/plain
            mime: "application/pdf",
            description: "File downloaded by download manager.",
          },
          // response data will be saved to this path if it has access right.
          //path: dirs.DocumentDir + `/${params}.pdf`,
        })
          .fetch("GET", data.path, {
            //some headers ..
          })
          .then(() => {
            // the path should be dirs.DocumentDir + 'path-to-file.anything'
            //Linking.openURL(res.path());
            ToastAndroid.show("File downloaded", ToastAndroid.LONG);
          });
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
