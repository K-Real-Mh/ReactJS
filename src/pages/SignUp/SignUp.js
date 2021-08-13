import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function SignUp() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <p>Fill in the form below to register new account.</p>
            <TextField
                required
                id="standard-required"
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
            />
            <TextField
                required
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
            />
            <Button type="submit" variant="contained">SignUp</Button>
            <div>
                {error && <p>{error}</p>}
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </form>
    );
}

export default SignUp;
