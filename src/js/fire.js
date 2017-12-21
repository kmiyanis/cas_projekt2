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

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const database = firebase.database();

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};