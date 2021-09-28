import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';
const types = {

    RESETDATA: "RESETDATA",

    FETCH_STEPS_PENDING: "FETCH_STEPS_PENDING",
    FETCH_STEPS_SUCCESS: "FETCH_STEPS_SUCCESS",
    FETCH_STEPS_FAILURE: "FETCH_STEPS_FAILURE",

    FETCH_HOMEDATA_PENDING: "FETCH_HOMEDATA_PENDING",
    FETCH_HOMEDATA_SUCCESS: "FETCH_HOMEDATA_SUCCESS",
    FETCH_HOMEDATA_FAILURE: "FETCH_HOMEDATA_FAILURE",

    FETCH_USERDETAILS_PENDING: "FETCH_USERDETAILS_PENDING",
    FETCH_USERDETAILS_SUCCESS: "FETCH_USERDETAILS_SUCCESS",
    FETCH_USERDETAILS_FAILURE: "FETCH_USERDETAILS_FAILURE",

    FETCH_CART_PENDING: "FETCH_CART_PENDING",
    FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
    FETCH_CART_FAILURE: "FETCH_CART_FAILURE",

    FETCH_UPDATE_PAN_PENDING: "FETCH_UPDATE_PAN_PENDING",
    FETCH_UPDATE_PAN_SUCCESS: "FETCH_UPDATE_PAN_SUCCESS",
    FETCH_UPDATE_PAN_FAILURE: "FETCH_UPDATE_PAN_FAILURE",

};
export const HomeActions = {
    resetData() {
        return { type: types.RESETDATA };
    },
    getsteps: async (dispatch, params, tokan) => {
        dispatch({ type: types.FETCH_STEPS_PENDING });
        let data = await SiteAPI.apiGetCall('/flags/step-state', params, tokan);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_STEPS_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_STEPS_SUCCESS, steps: data.signUpSteps });
        }
    },
    getHomeData: async (dispatch, params, tokan) => {
        dispatch({ type: types.FETCH_HOMEDATA_PENDING });
        let data = await SiteAPI.apiGetCall('/retrieveData', params, tokan);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_HOMEDATA_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_HOMEDATA_SUCCESS, home: data });
        }
    },
    getUserDetails: async (dispatch, params, tokan) => {
        dispatch({ type: types.FETCH_USERDETAILS_PENDING });
        let data = await SiteAPI.apiGetCall('/user/rawData', params, tokan);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_USERDETAILS_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_USERDETAILS_SUCCESS, user: data.data });
        }
    },
    getcartDetails: async (dispatch, params, tokan) => {
        dispatch({ type: types.FETCH_CART_PENDING });
        let data = await SiteAPI.apiGetCall('/addCart', params, tokan);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_CART_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_CART_SUCCESS, cart: data.responseString });
        }
    },
    updatePan: async (dispatch, params, tokan) => {
        dispatch({ type: types.FETCH_UPDATE_PAN_PENDING });
        let data = await SiteAPI.apiPostCall('/user/userPan', params, tokan);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_UPDATE_PAN_FAILURE, error: data.message });
        } else {
            Alert.alert(data.responseString)
            dispatch({ type: types.FETCH_CART_SUCCESS, pan: data.data });
        }
    },
};

const initialState = {
    isFetching: false,
    error: null,
    steps: null,
    home: null,
    user: null,
    cart: null,
    pan: null,
};

export const reducer = (state = initialState, action) => {
    const { type, error, steps, home, user, cart, pan } = action;
    switch (type) {
        case types.FETCH_UPDATE_PAN_PENDING:
        case types.FETCH_CART_PENDING:
        case types.FETCH_USERDETAILS_PENDING:
        case types.FETCH_HOMEDATA_PENDING:
        case types.FETCH_STEPS_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_UPDATE_PAN_FAILURE:
        case types.FETCH_CART_FAILURE:
        case types.FETCH_USERDETAILS_FAILURE:
        case types.FETCH_HOMEDATA_FAILURE:
        case types.FETCH_STEPS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        case types.FETCH_STEPS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                steps,
            };
        }
        case types.FETCH_HOMEDATA_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                home,
            };
        }
        case types.FETCH_USERDETAILS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                user,
            };
        }
        case types.FETCH_CART_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                cart,
            };
        }
        case types.FETCH_UPDATE_PAN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                pan,
            };
        }
        case types.RESETDATA:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};
