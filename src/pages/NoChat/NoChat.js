import ChatList from '../../components/ChatList/ChatList';
import { Grid } from '@material-ui/core';
import Message from '../../components/Message/Message';
import { useSelector } from 'react-redux';
import { chatListSelector } from '../../store/chats/selectors';

export default function NoChat() {
    const chats = useSelector(chatListSelector);

    return (
        <Grid container spacing={3}>
            <ChatList chats={chats}/>
            <Grid item xs={8}>
                <Message text=" Please, select a chat."/>
            </Grid>
        </Grid>
    );
}
