import SiteAPI from "../services/SiteApis";
import { Alert, Linking } from "react-native";
const types = {
    FETCH_CHECKOUT_BUTTON_PENDING: "FETCH_CHECKOUT_BUTTON_PENDING",
    FETCH_CHECKOUT_BUTTON_SUCCESS: "FETCH_CHECKOUT_BUTTON_SUCCESS",
    FETCH_CHECKOUT_BUTTON_FAILURE: "FETCH_CHECKOUT_BUTTON_FAILURE",
};

export const CheckoutActions = {
    checkoutButton: async (dispatch, params, token) => {
        dispatch({ type: types.FETCH_CHECKOUT_BUTTON_PENDING });
        let citys = await SiteAPI.apiPostCall(`/apiData/PURCHASETRXN`, params, token);
        if (citys.Data) {
            dispatch({ type: types.FETCH_CHECKOUT_BUTTON_SUCCESS, citys: citys.Data.city_master });
            Linking.openURL(citys?.Data[0].Paymentlink.split(">")[1].split("<")[0]);
        }
    },
};

const initialState = {
    isFetching: false,
    error: null,
    occupations: [],
    incomes: [],
    states: [],
    citys: [],
    pincodeInfo: null,
    accountTypes: [],
    banks: [],
    bankDetails: {},
    documents: null,
    addSuccess: false,
    updateSuccess: false,
    uploadSuccess: false,
};

export const reducer = (state = initialState, action) => {
    const { type, error, occupations, incomes, states, citys, accountTypes, banks, bankDetails, pincodeInfo, documents } = action;
    switch (type) {
        case types.FETCH_CHECKOUT_BUTTON_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
            };
        }

        case types.FETCH_CHECKOUT_BUTTON_FAILURE: {
            return {
                ...state,
                isFetching: false,
                addSuccess: false,
                updateSuccess: false,
                uploadSuccess: false,
                error,
            };
        }

        case types.FETCH_CHECKOUT_BUTTON_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                citys,
            };
        }

        default:
            return state;
    }
};
