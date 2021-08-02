import { Grid } from '@material-ui/core';
import { Redirect, useParams } from 'react-router-dom';
import ChatList from '../../components/ChatList/ChatList';
import MessageList from '../../components/MessageList/MessageList';
import { useSelector } from 'react-redux';
import { chatListSelector } from '../../store/chats/selectors';
import { useMemo } from 'react';
import { messageListSelector } from '../../store/messages/selectors';

export default function Chats() {
    const {chatId} = useParams();

    const getMessageSelected = useMemo(() => {
        return messageListSelector(chatId)
    }, [chatId]);

    const messages = useSelector(
        getMessageSelected,
        (prev, next) => prev.length === next.length
    );

    const chats = useSelector(
        chatListSelector,
        (prev, next) => prev.length === next.length
    );

    const chatName = useMemo(() => {
        return chats.find(item => item.id === chatId)?.name;
    }, [chatId, chats])

    if (!chatId || !messages) {
        return <Redirect to="/nochat"/>;
    }

    return (
        <Grid container spacing={3}>
            <ChatList chats={chats} chatId={chatId}/>
            <MessageList
                messageList={messages}
                recipient={chatName}
                chatId={chatId}
            />
        </Grid>
    );
}
