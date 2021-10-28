import SiteAPI from '../services/SiteApis'
import { Alert } from 'react-native';

const types = {
    RESET_FUNDS: "RESET_FUNDS",

    FETCH_FETCH_FUNDS_PENDING: "FETCH_FETCH_FUNDS_PENDING",
    FETCH_FETCH_FUNDS_SUCCESS: "FETCH_FETCH_FUNDS_SUCCESS",
    FETCH_FETCH_FUNDS_FAILURE: "FETCH_FETCH_FUNDS_FAILURE",

};

export const AddMoreFundsActions = {
    resetFunds: async (dispatch) => {
        dispatch({ type: types.RESET_FUNDS });
    },
    fetchFunds: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_FETCH_FUNDS_PENDING });
        let data = await SiteAPI.apiGetCall(`/amc/search?amcname=${params.name}`, {}, token);
        if (data.error) {
            Alert.alert(data.message)
            dispatch({ type: types.FETCH_FETCH_FUNDS_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_FETCH_FUNDS_SUCCESS, funds: data.results });
        }
    },
};

const initialState = {
    isFetching: false,
    error: null,
    funds: [],
};

export const reducer = (state = initialState, action) => {
    const { type, error, funds } = action;
    switch (type) {
        case types.FETCH_FETCH_FUNDS_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_FETCH_FUNDS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        case types.FETCH_FETCH_FUNDS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                funds
            };
        }
        case types.RESET_FUNDS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                funds:[]
            };
        }
        default:
            return state;
    }
};
