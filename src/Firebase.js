import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCzmJJVcoCMtkbGnz6MClhrn_nteobXLDA",
    authDomain: "burgerqueen-milexys.firebaseapp.com",
    databaseURL: "https://burgerqueen-milexys.firebaseio.com",
    projectId: "burgerqueen-milexys",
    storageBucket: "burgerqueen-milexys.appspot.com",
    messagingSenderId: "619398458604"
  };
  firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;