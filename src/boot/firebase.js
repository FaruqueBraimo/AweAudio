import * as firebase from 'firebase/app'

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAk9AbSDJuroLyqr1qQ4Gp0fA5ZehgvB-o",
    authDomain: "norb-dd8de.firebaseapp.com",
    databaseURL: "https://norb-dd8de.firebaseio.com",
    projectId: "norb-dd8de",
    storageBucket: "norb-dd8de.appspot.com",
    messagingSenderId: "929249220341",
    appId: "1:929249220341:web:3832c97972359777cad7bc"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)

// ==== Firebase auth
export const firebaseAuth = firebaseApp.auth();


// ==== Firebase firestore db
export const db = firebaseApp.firestore();

db.enablePersistence() //activando o cacheamento de dados para o funcionamento offline

export const dbPalavras = db.collection("palavras");



// ==== Firebase file storage

export const fbStorage = firebase.storage
export const storageRef = firebase.storage().ref()
export const imagesUsers = firebase.storage().ref().child('usersImages');