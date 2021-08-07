import { SET_CATS_LIST, SET_ERROR_STATUS, SET_IDLE_STATUS, SET_LOADING_STATUS } from './actions';

export const CATS_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
}

const initialState = {
    list: [],
    status: CATS_REQUEST_STATUS.IDLE
}

export function catsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IDLE_STATUS:
            return {
                ...state,
                status: CATS_REQUEST_STATUS.IDLE
            }
        case SET_ERROR_STATUS:
            return {
                ...state,
                status: CATS_REQUEST_STATUS.ERROR
            }
        case SET_LOADING_STATUS:
            return {
                ...state,
                status: CATS_REQUEST_STATUS.LOADING
            }
        case SET_CATS_LIST:
            return {
                ...state,
                list: action.payload.cats
            }
        default:
            return {
                ...state
            }
    }
}
