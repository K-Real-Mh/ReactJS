import './App.css';
import { Container, createTheme } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './components/Router/Router';

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
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Router/>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;

/*
* APP -> chats, setChats
*   Profile -> name, showName (redux)
*   Chats -> chats, ChatId
*       ChatList -> chats.name, ChatId
*       MessageList -> chats[chatId].messages, chats[chatId].name, messageList, setMessageList
*   NoChat -> chats
*       ChatList -> chats.name, ChatId
*
* APP ->
*   Router
*       Profile -> name, showName (redux), changeName
*       Chats -> chats, ChatId
*           ChatList -> chats.name, ChatId
*           MessageList -> chats[chatId] (redux)
*       NoChat -> chats
*           ChatList -> chats.name, ChatId
* */
