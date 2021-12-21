import firebase from "firebase"; // importing firebase

// firebase configration file, giving access to the database
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

// initializing the firbase 
const firebaseApp = firebase.initializeApp(firebaseConfig);
// telling what we are going to use to firebase
const db = firebaseApp.firestore();
// auth() for login and log out
const auth = firebase.auth();
// using google authentication
const provider = new firebase.auth.GoogleAuthProvider();
// using firebase storage
const storage = firebase.storage();

export { auth, provider, storage };
export default db;