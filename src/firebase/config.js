import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEVFyY9thMQrqXi4yQo5tzuS5c1Ev586M",
    authDomain: "social-network-7.firebaseapp.com",
    databaseURL: "https://social-network-7.firebaseio.com",
    projectId: "social-network-7",
    storageBucket: "social-network-7.appspot.com",
    messagingSenderId: "149882653499",
    appId: "1:149882653499:web:4cc83a1b3d2da1a6e1451e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();