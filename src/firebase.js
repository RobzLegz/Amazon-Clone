import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCUfFWkPo5HY9Wfh3ztwgfihBzuyj_-m0",
    authDomain: "clone-f1a11.firebaseapp.com",
    projectId: "clone-f1a11",
    storageBucket: "clone-f1a11.appspot.com",
    messagingSenderId: "682964477394",
    appId: "1:682964477394:web:b8ff24b19e902b619d940b",
    measurementId: "G-KCMB0BBLWZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
