import ChatList from '../../components/ChatList/ChatList';
import { Grid } from '@material-ui/core';
import Message from '../../components/Message/Message';

export default function NoChat({chats}) {
    return (
        <Grid container spacing={3}>
            <ChatList chats={chats} />
            <Grid item xs={8}>
                <Message text=" Please, select a chat." />
            </Grid>
        </Grid>
    );
}
