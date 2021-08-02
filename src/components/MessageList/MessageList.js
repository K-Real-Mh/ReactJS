import Message from '../Message/Message';
import Form from '../Form/Form';
import { Grid } from '@material-ui/core';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/messages/actions';

export default function MessageList({messageList, recipient, chatId}) {
    const dispatch = useDispatch();

    const handleAddMessage = useCallback(
        (message) => {
            const newMessage = {
                author: 'you',
                text: message
            }
            dispatch(addMessage(chatId, newMessage))

            setTimeout(() => {
                dispatch(addMessage(chatId, {
                    author: recipient,
                    text: `Zzzz...`
                }))
            }, 1500)

        }, [chatId, recipient, dispatch]
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
            <Form onSubmit={handleAddMessage} label="Message" btnLabel="Send"/>
        </Grid>
    );
}
