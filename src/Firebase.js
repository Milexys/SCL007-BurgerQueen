import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCzmJJVcoCMtkbGnz6MClhrn_nteobXLDA",
    authDomain: "burgerqueen-milexys.firebaseapp.com",
    databaseURL: "https://burgerqueen-milexys.firebaseio.com",
    projectId: "burgerqueen-milexys",
  });

let db = firebase.firestore();

export default db;