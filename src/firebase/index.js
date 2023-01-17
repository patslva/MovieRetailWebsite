import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBOzMR_ZhKhpDZTRrEcoPzdor5pna1rj-g",
    authDomain: "summative-b5f80.firebaseapp.com",
    databaseURL: "https://summative-b5f80-default-rtdb.firebaseio.com",
    projectId: "summative-b5f80",
    storageBucket: "summative-b5f80.appspot.com",
    messagingSenderId: "23569405084",
    appId: "1:23569405084:web:fa19afb9ee1bc813fcc959",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();


export {auth, firestore}