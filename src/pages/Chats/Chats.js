import { Grid } from '@material-ui/core';
import { Redirect ,useParams } from 'react-router-dom';
import ChatList from '../../components/ChatList/ChatList';
import MessageList from '../../components/MessageList/MessageList';

export default function Chats({chats, setChats}) {

    const { chatId } = useParams();

    if (!chatId || !chats[chatId]) {
        return <Redirect to="/nochat" />;
    }

    return (
        <Grid container spacing={3}>
            <ChatList chats={chats} chatId={chatId} />
            <MessageList messages={chats[chatId].messages} recipient={chats[chatId].name} />
        </Grid>
    );
}
