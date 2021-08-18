import './App.css';
import { Container, createTheme } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './components/Router/Router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import firebase from 'firebase';
import { changeIsAuthed } from './store/profile/actions';

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
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            dispatch(changeIsAuthed(!!user));
        })
    }, [])

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
