import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function ChatList({chats, chatId}) {

    return (
        <Grid item xs={3}>
            <List className={'list'} component="nav">
                {chats.map((chat) => (
                    <Link key={chat.id} to={`/chats/${chat.id}`}>
                        <ListItem button selected={chat.id === chatId}>
                            <ListItemText primary={chat.name}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Grid>
    );
}
