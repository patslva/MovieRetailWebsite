import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBOzMR_ZhKhpDZTRrEcoPzdor5pna1rj-g",
    authDomain:"summative-b5f80.firebaseapp.com",
    projectId: "summative-b5f80",
    storageBucket:"summative-b5f80.appspot.com",
    // messagingsenderId:
    appId: "23569405084",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export {getAuth, getFirestore, storage}