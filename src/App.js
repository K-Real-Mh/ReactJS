import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Container, createTheme } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Chats from './pages/Chats/Chats';
import { useState } from 'react';
import NoChat from './pages/NoChat/NoChat';

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

const initialChats = [
    {
        name: 'Han Solo',
        id: 'Han Solo',
        messages: [
            {
                sender: 'you',
                message: 'hello !'
            },
            {
                sender: 'Han Solo',
                message: 'hello, my friend!'
            }
        ]
    },
    {
        name: 'Vasya',
        id: 'Vasya',
        messages: [
            {
                sender: 'you',
                message: 'hello Vasya!'
            },
            {
                sender: 'Han Solo',
                message: 'What do you need?'
            }
        ]
    },
    {
        name: 'Katya',
        id: 'Katya',
        messages: []
    },
]

function App() {
    const [chats, setChats] = useState(initialChats);

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Switch>

                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route path="/profile">
                            <Profile/>
                        </Route>

                        <Route path="/chats/:chatId?">
                            <Chats chats={chats} setChats={setChats}/>
                        </Route>

                        <Route path="/nochat">
                            <NoChat chats={chats}/>
                        </Route>

                    </Switch>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
