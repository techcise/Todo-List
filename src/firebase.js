import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAy5qKQnCKYdpGGniFas5ZfloMKmv-ETOI",
    authDomain: "todo-app-9540e.firebaseapp.com",
    projectId: "todo-app-9540e",
    storageBucket: "todo-app-9540e.appspot.com",
    messagingSenderId: "1039944106735",
    appId: "1:1039944106735:web:c9160b7b9655adb82ad11a",
    measurementId: "G-NZ3KGCE1SG"
});

const db = firebaseApp.firestore();

export default db;