import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyABUpWHjScINMsko2AKsXkYZx_2WhsQLcA",
    authDomain: "reactjs-d0592.firebaseapp.com",
    databaseURL: "https://reactjs-d0592-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactjs-d0592",
    storageBucket: "reactjs-d0592.appspot.com",
    messagingSenderId: "496407366899",
    appId: "1:496407366899:web:7a9f5b28a36f934726fb86"
};

firebase.initializeApp(config);

export const db = firebase.database();
