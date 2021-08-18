import { db } from '../../services/firebase';
import { AUTHORS } from '../../constants';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    }
})

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];

    snapshot.forEach((mes) => {
        messages.push(mes.val());
    });

    return { chatId: snapshot.key, messages }
}

export const addMessageWithFirebase = (chatId, message) => async () => {
    await db.ref('messages').child(chatId).child(message.id).set(message);

    let timer = setTimeout(() => {
        db.ref('messages').child(chatId)
            .child(`${chatId}-${Date.now()}`)
            .set({
                id: `message${Date.now()}`,
                author: AUTHORS.BOT,
                text: 'Zzzz..',
            });

        clearTimeout(timer)
    }, 1500)
};

export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: ADD_MESSAGE,
            payload,
        });
    });

    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: ADD_MESSAGE,
            payload,
        });
    });
}


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
