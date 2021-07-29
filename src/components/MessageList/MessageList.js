import Message from '../Message/Message';
import Form from '../Form/Form';
import { Grid } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';

export default function MessageList({messages, recipient}) {

    const [messageList, setMessageList] = useState(messages);

    useEffect(() => {
        setMessageList(messages);
    }, [messages])

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].sender === 'you') {

            const message = {
                sender: recipient,
                message: `Zzzz...`
            }

            setTimeout(() => {
                setMessageList(prevMessages => {
                    return [...prevMessages, message];
                })
            }, 1500)
        }
    }, [messageList, recipient])

    const handleAddMessage = useCallback(
        (message) => {
            setMessageList(prevMessages => {
                return [...prevMessages, message];
            })
        }, []
    )

    return (
        <Grid item xs={8}>
            {
                messageList.length === 0 ?
                    <Message text="Write your first message" /> :
                    messageList.map((message, id) => {
                       return <Message key={id} text={message.message} author={message.sender} />
                    })
            }
            <Form onSubmit={handleAddMessage}/>
        </Grid>
    );
}
