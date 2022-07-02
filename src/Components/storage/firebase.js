
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBT6GKAnMyvRFaic0w2JzqCirZj3upNu9k",
    authDomain: "dchat-74b80.firebaseapp.com",
    databaseURL: "https://dchat-74b80-default-rtdb.firebaseio.com",
    projectId: "dchat-74b80",
    storageBucket: "dchat-74b80.appspot.com",
    messagingSenderId: "836182274999",
    appId: "1:836182274999:web:80b4d0d05ac4fe39c56e32"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


/*
working with firebase files 
$ npm install firebase

*/