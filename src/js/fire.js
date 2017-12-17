import firebase from 'firebase'
import keys from './ApiKeys'

var config = {
    apiKey: keys.firebase,
    authDomain: "miya-tee-shop.firebaseapp.com",
    databaseURL: "https://miya-tee-shop.firebaseio.com",
    projectId: "miya-tee-shop",
    storageBucket: "miya-tee-shop.appspot.com",
    messagingSenderId: keys.firebaseSenderId
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;