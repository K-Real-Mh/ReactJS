import Message from '../Message/Message';
import { FormPure } from '../Form/Form';
import { Grid } from '@material-ui/core';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageWithFirebase } from '../../store/messages/actions';
import { AUTHORS } from '../../constants';

export default function MessageList({messageList, chatId}) {
    const dispatch = useDispatch();

    const handleAddMessage = useCallback(
        (message) => {
            const newMessage = {
                author: AUTHORS.ME,
                text: message,
                id: `${chatId}-${Date.now()}`,
            }
            dispatch(addMessageWithFirebase(chatId, newMessage));
        }, [chatId, dispatch]
    )

    return (
        <Grid item xs={8}>
            {
                messageList.length === 0 ?
                    <Message text="Write your first message"/> :
                    messageList.map((message) => {
                        return <Message key={message.id} text={message.text} author={message.author}/>
                    })
            }
            <FormPure onSubmit={handleAddMessage} label="Message" btnLabel="Send"/>
        </Grid>
    );
}
