import { Grid } from '@material-ui/core';
import ChatList from '../../components/ChatList/ChatList';
import MessageList from '../../components/MessageList/MessageList';

const Chats = ({chats, chatId, messages, chatName}) => (
    <Grid container spacing={3}>
        <ChatList chats={chats} chatId={chatId}/>
        <MessageList
            messageList={messages}
            recipient={chatName}
            chatId={chatId}
        />
    </Grid>
)

export default Chats;
