import { ADD_MESSAGE } from './actions';

const initialState = {
    messageList: {
        id0: [
            {
                id: 'id00',
                text: 'hello !',
                author: 'you'
            },
            {
                id: 'id01',
                text: 'hello, my friend!',
                author: 'Han Solo'
            },
        ],
        id1: [
            {
                id: 'id10',
                text: 'hello Vasya!',
                author: 'you'
            },
            {
                id: 'id11',
                text: 'What do you need?',
                author: 'Vasya'
            },
        ]
    }
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentList = state.messageList[action.payload.chatId] || [];
            console.log(action)
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [
                        ...currentList,
                        {
                            ...action.payload.message,
                            id: `${action.payload.chatId}${currentList.length}`,
                        },
                    ]
                }
            }
        default:
            return state;
    }
}
