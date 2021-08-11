import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import NoChat from '../../pages/NoChat/NoChat';
import ChatsContainer from '../../pages/Chats/ChatsContainer/ChatsContainer';

function Router() {
    return (
        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/profile">
                <Profile/>
            </Route>

            <Route path="/chats/:chatId?">
                <ChatsContainer/>
            </Route>

            <Route path="/nochat">
                <NoChat/>
            </Route>

        </Switch>
    );
}

export default Router;
