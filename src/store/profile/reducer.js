import { TOGGLE_NAME } from './actions';

const initialState = {
    showName: false,
    name: 'John Doe'
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_NAME: {
            return {
                ...state,
                showName: !state.showName
            }
        }
        default:
            return state
    }
}
