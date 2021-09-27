import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    FETCH_PAN_PENDING: "FETCH_PAN_PENDING",
    FETCH_PAN_SUCCESS: "FETCH_PAN_SUCCESS",
    FETCH_PAN_FAILURE: "FETCH_PAN_FAILURE",

};

export const HomeActions = {
    updatePan: async (dispatch, params) => {
        dispatch({ type: types.FETCH_PAN_PENDING });
        let data = await SiteAPI.apiPostCall('/user/userPan', params);
        console.log('aaa ', data)
        if (data.error) {
            Alert.alert('data.message')
            dispatch({ type: types.FETCH_PAN_FAILURE, error: data.message });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_PAN_SUCCESS, pan: data });
        }
    },
};

const initialState = {
    isFetching: false,
    error: null,
    pan: null,
};

export const reducer = (state = initialState, action) => {
    const { type, error, pan } = action;
    switch (type) {
        case types.FETCH_PAN_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_PAN_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        case types.FETCH_PAN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                pan,
            };
        }
        default:
            return state;
    }
};
