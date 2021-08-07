import { API_URL } from '../../constants';

export const SET_CATS_LIST = 'CATS::SET_CATS_LIST';
export const SET_LOADING_STATUS = 'CATS::SET_LOADING_STATUS';
export const SET_ERROR_STATUS = 'CATS::SET_ERROR_STATUS';
export const SET_IDLE_STATUS = 'CATS::SET_IDLE_STATUS';

export const setLoadingStatus = () => ({type: SET_LOADING_STATUS});
export const setErrorStatus = () => ({type: SET_ERROR_STATUS});
export const setIdleStatus = () => ({type: SET_IDLE_STATUS});

export const setCatsList = (cats) => (
    {
        type: SET_CATS_LIST,
        payload: {
            cats
        }
    }
)

export const fetchCats = () => async (dispatch) => {
    dispatch(setLoadingStatus());

    try {
        const res = await fetch(API_URL);

        if (!res.ok || res.status !== 200) {
            dispatch(setErrorStatus())
            throw new Error(`Request failed with status ${res.status}`)
        }
        const result = await res.json();
        console.log(result)

        dispatch(setCatsList(result));
        dispatch(setIdleStatus());
    } catch (error) {
        dispatch(setErrorStatus())
    }
}


