import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function ChatList({chats, chatId}) {


    return (
        <Grid item xs={3}>
            <List className={'list'} component="nav">
                {Object.keys(chats).map((id, i) => (
                    <Link key={i} to={`/chats/${id}`}>
                        <ListItem button selected={id === chatId}>
                            <ListItemText primary={chats[id].name}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Grid>
    );
}
