import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { chatListSelector } from '../../../store/chats/selectors';
import { useEffect, useMemo } from 'react';
import { messageListSelector } from '../../../store/messages/selectors';
import Chats from '../Chats';
import { initMessageTracking } from '../../../store/messages/actions';

export default function ChatsContainer() {
    const dispatch = useDispatch();
    const {chatId} = useParams();

    const getMessageSelected = useMemo(() => {
        return messageListSelector(chatId)
    }, [chatId]);

    const messages = useSelector(
        getMessageSelected,
        (prev, next) => prev.length === next.length
    );

    useEffect(() => {
        dispatch(initMessageTracking())
    }, [])

    const chats = useSelector(
        chatListSelector,
        (prev, next) => prev.length === next.length
    );

    if (!chatId || !messages) {
        return <Redirect to="/nochat"/>;
    }

    return (
        <Chats
            chats={chats}
            chatId={chatId}
            messages={messages}
        />
    );
}
