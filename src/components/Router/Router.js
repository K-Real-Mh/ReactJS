import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import NoChat from '../../pages/NoChat/NoChat';
import ChatsContainer from '../../pages/Chats/ChatsContainer/ChatsContainer';
import Cats from '../../pages/Cats/Cats';
import SignUp from '../../pages/SignUp/SignUp';
import Login from '../../pages/Login/Login';
import PublicRoute from '../../hocs/PublicRoute';
import PrivateRoute from '../../hocs/PrivateRoute';

function Router() {
    return (
        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

            <PublicRoute exact path="/login">
                    <Login/>
            </PublicRoute>

            <PublicRoute exact path="/signup">
                    <SignUp/>
            </PublicRoute>

            <PrivateRoute path="/profile">
                    <Profile/>
            </PrivateRoute>

            <Route path="/cats">
                <Cats/>
            </Route>

            <PrivateRoute path="/chats/:chatId?">
                    <ChatsContainer/>
            </PrivateRoute>

            <PrivateRoute path="/nochat">
                    <NoChat/>
            </PrivateRoute>

        </Switch>
    );
}

export default Router;
