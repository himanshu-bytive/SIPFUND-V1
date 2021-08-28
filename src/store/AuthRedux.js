const types = {
    LOGOUT: 'LOGOUT',
    LOGIN: 'LOGIN_SUCCESS',
    GET_SERVICES: 'GET_SERVICES',
    GET_PAGES: 'GET_PAGES',
    GET_SETTINGS: 'GET_SETTINGS',
    SET_STATUS: 'SET_STATUS',
    FINISH_INTRO: 'FINISH_INTRO',
};

export const AuthActions = {
    login: (user, token) => {
        return { type: types.LOGIN, user, token };
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
    user: null,
    token: null,
    services: [],
    pages: [],
    settings: {},
    status: false,
    finishIntro: null,
};

export const reducer = (state = initialState, action) => {
    const { type, user, token, services, pages, settings, status } = action;
    switch (type) {
        case types.LOGOUT:
            return Object.assign({}, initialState);
        case types.LOGIN:
            return { ...state, user, token };
        case types.GET_SERVICES:
            return { ...state, services };
        case types.SET_STATUS:
            return { ...state, status };
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
