import SiteAPI from "../services/SiteApis";
import moment from 'moment';
const types = {
    FETCH_FUND_DETAILS: "FETCH_FUND_DETAILS",

    FETCH_FUND_DETAILS_PENDING: "FETCH_FUND_DETAILS_PENDING",
    FETCH_FUND_DETAILS_SUCCESS: "FETCH_FUND_DETAILS_SUCCESS",
    FETCH_FUND_DETAILS_FAILURE: "FETCH_FUND_DETAILS_FAILURE",
};

export const FundDetailActions = {
    fundDetails: async (dispatch, details) => {
        dispatch({ type: types.FETCH_FUND_DETAILS, details });
    },
    fundDetailsList: async (dispatch, params, token) => {
        console.log(params.iin)
        dispatch({ type: types.FETCH_FUND_DETAILS_PENDING });
        let date = new Date()
        let preDate = new Date().setYear(new Date().getYear() - 1)
        let data = await SiteAPI.apiGetCall(`/proxy/morningstar/service/mf/Price/isin/INF200K01T28/accesscode/startdate=${moment(preDate).format('YYYY-MM-DD')}&enddate=${moment(date).format('YYYY-MM-DD')}`, params, token);
        let dataNew = await SiteAPI.apiGetCall(`/proxy/morningstar/v2/service/mf/r5soaer67qpg88tr/isin/INF200K01T28/accesscode/`, params, token);
        if (data.error) {
            dispatch({ type: types.FETCH_FUND_DETAILS_FAILURE, error: data.message });
        } else {
            dispatch({ type: types.FETCH_FUND_DETAILS_SUCCESS, detailsMap: data.data.Prices, detailsInfo: dataNew.data });
        }
    },
};

const initialState = {
    isFetching: false,
    error: null,
    details: {},
    detailsMap: null,
    detailsInfo: null,
};

export const reducer = (state = initialState, action) => {
    const { type, error, details, detailsMap, detailsInfo } = action;
    switch (type) {
        case types.FETCH_FUND_DETAILS_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_FUND_DETAILS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }

        case types.FETCH_FUND_DETAILS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                details,
            };
        }
        case types.FETCH_FUND_DETAILS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                detailsMap,
                detailsInfo
            };
        }

        default:
            return state;
    }
};
