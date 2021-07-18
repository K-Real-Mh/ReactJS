import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Message from './components/Message/Message';
import Form from './components/Form/Form';
import { Container, createTheme, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

function App() {
    const [messageList, setMessageList] = useState([]);
    const chats = [
        {
            name: 'Han Solo',
            id: 'Han Solo',
        },
        {
            name: 'Vasya',
            id: 'Vasya',
        },
        {
            name: 'Katya',
            id: 'Katya',
        },
    ]

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
            const author = messageList[messageList.length - 1].author;
            const message = {
                author: 'robot',
                text: `Hello ${author}!`
            }

            setTimeout(() => {
                setMessageList(prevMessages => {
                    return [...prevMessages, message];
                })
            }, 1500)
        }
    }, [messageList])

    const handleAddMessage = useCallback(
        (message) => {
            setMessageList(prevMessages => {
                return [...prevMessages, message];
            })
        }, []
    )

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <List className={'list'} component="nav">
                                {
                                    chats.map(chat => {
                                        return (
                                            <ListItem button key={chat.id}>
                                                <ListItemText primary={chat.name}/>
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        </Grid>
                        <Grid item xs={8}>
                            {
                                messageList.length === 0 ?
                                    <Message text={'Write your first message'}/> :
                                    messageList.map((message, id) => {
                                        return <Message key={id} author={message.author} text={message.text}/>
                                    })
                            }
                            <Form onSubmit={handleAddMessage}/>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
