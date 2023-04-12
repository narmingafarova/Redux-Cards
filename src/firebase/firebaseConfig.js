import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByneumNx59sw2ORbLjOVJdxddIdmHOzXk",
  authDomain: "salla-webpage.firebaseapp.com",
  databaseURL:
    "https://salla-webpage-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "salla-webpage",
  storageBucket: "salla-webpage.appspot.com",
  messagingSenderId: "676821107062",
  appId: "1:676821107062:web:a70394d6de308d3266fa57",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
