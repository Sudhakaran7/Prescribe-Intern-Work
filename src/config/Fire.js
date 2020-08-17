import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyBdQQZfxjxKKiVxhY5xMH_NDnyGKtWAbnQ",
    authDomain: "logindb-8a6bf.firebaseapp.com",
    databaseURL: "https://logindb-8a6bf.firebaseio.com",
    projectId: "logindb-8a6bf",
    storageBucket: "logindb-8a6bf.appspot.com",
    messagingSenderId: "972733211553",
    appId: "1:972733211553:web:9c6c9ea60d7ab9ca4361e0",
};

const fire = firebase.initializeApp(config);

export default fire;

