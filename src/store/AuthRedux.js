import SiteAPI from '../services/SiteApis'
import { Platform, Alert } from 'react-native';
const types = {
    LOGOUT: 'LOGOUT',
    FETCH_LOGIN_PENDING: "FETCH_LOGIN_PENDING",
    FETCH_LOGIN_SUCCESS: "FETCH_LOGIN_SUCCESS",
    FETCH_LOGIN_FAILURE: "FETCH_LOGIN_FAILURE",
    GET_SERVICES: 'GET_SERVICES',
    GET_PAGES: 'GET_PAGES',
    GET_SETTINGS: 'GET_SETTINGS',
    SET_STATUS: 'SET_STATUS',
    FINISH_INTRO: 'FINISH_INTRO',
};

export const AuthActions = {
    login: async (dispatch, phone) => {
        dispatch({ type: types.FETCH_LOGIN_PENDING });
        let auth = await SiteAPI.login({mobileNo:9439700504});
        console.log(auth)
        // if (auth.error) {
        //     Alert.alert(auth.data)
        //     dispatch({ type: types.FETCH_LOGIN_FAILURE, error: '' });
        // } else {
        //     let users = await SiteAPI.getUserInfo({ ticket: auth });
        //     dispatch({ type: types.FETCH_LOGIN_SUCCESS, ticket: auth, users });
        // }
    },
    logout() {
        return { type: types.LOGOUT };
    },
    setServices(services) {
        return { type: types.GET_SERVICES, services };
    },
    setPages(pages) {
        return { type: types.GET_PAGES, pages };
    },
    setStatus(status) {
        return { type: types.SET_STATUS, status };
    },
    setSettings(settings) {
        return { type: types.GET_SETTINGS, settings };
    },
    finishIntro() {
        return { type: types.FINISH_INTRO };
    },
};

const initialState = {
    isFetching: false,
    error: null,
    user: null,
    phones: [],
};

export const reducer = (state = initialState, action) => {
    const { type, error, user, phones } = action;
    switch (type) {
        case types.FETCH_LOGIN_PENDING: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case types.FETCH_LOGIN_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        case types.FETCH_LOGIN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                user,
                phones
            };
        }
        case types.LOGOUT:
            return Object.assign({}, initialState);
        case types.GET_SERVICES:
            return { ...state, services };
        case types.GET_PAGES:
            return { ...state, pages };
        case types.GET_SETTINGS:
            return { ...state, settings };
        case types.FINISH_INTRO:
            return { ...state, finishIntro: true };
        default:
            return state;
    }
};
