export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    }
})

export const addMessageWithThunk = (chatId, message, recipient) => {
    return (dispatch) => {
        dispatch(addMessage(chatId, message));
        if (message.author === 'you') {
            setTimeout(() => {
                dispatch(addMessage(chatId, {
                    author: recipient,
                    text: `Zzzz...`
                }))
            }, 1500)
        }
    }
}
