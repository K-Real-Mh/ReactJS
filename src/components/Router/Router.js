import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import Chats from '../../pages/Chats/Chats';
import NoChat from '../../pages/NoChat/NoChat';

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
                <Chats/>
            </Route>

            <Route path="/nochat">
                <NoChat/>
            </Route>

        </Switch>
    );
}

export default Router;
