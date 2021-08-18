import { ADD_MESSAGE } from './actions';

const initialState = {
    messageList: {}
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: action.payload.messages,
                },

            }
        default:
            return state;
    }
}
