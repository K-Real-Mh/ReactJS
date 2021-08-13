import { CHANGE_IS_AUTHED, CHANGE_NAME } from './actions';

const initialState = {
    name: 'John Doe',
    isAuthed: false
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed
            }
        }
        default:
            return state
    }
}
