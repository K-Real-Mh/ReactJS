import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './Home.css';

export default function Home() {
    return (
        <Grid className="home" container>
            <Grid item xs={4}>
                <Link className="home__link" to="/chats">Chats</Link>
            </Grid>
            <Grid item xs={4}>
                <Link className="home__link" to="/profile">Profile</Link>
            </Grid>
            <Grid item xs={4}>
                <Link className="home__link" to="/cats">Cats</Link>
            </Grid>
            <Grid item xs={6}>
                <Link className="home__link" to="/login">Login</Link>
            </Grid>
            <Grid item xs={6}>
                <Link className="home__link" to="/signup">Registration</Link>
            </Grid>
        </Grid>
    )
}
