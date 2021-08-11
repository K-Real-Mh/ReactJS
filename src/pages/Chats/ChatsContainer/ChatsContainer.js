import { Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { chatListSelector } from '../../../store/chats/selectors';
import { useMemo } from 'react';
import { messageListSelector } from '../../../store/messages/selectors';
import Chats from '../Chats';

export default function ChatsContainer() {
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
        <Chats
            chats={chats}
            chatId={chatId}
            messages={messages}
            chatName={chatName}
        />
    );
}
