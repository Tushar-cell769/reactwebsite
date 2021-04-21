import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBfn5HMt-hVhKlDze-ix1zOTfkpDY74p1A",
  authDomain: "react-ecommerce-project-854bb.firebaseapp.com",
  projectId: "react-ecommerce-project-854bb",
  storageBucket: "react-ecommerce-project-854bb.appspot.com",
  messagingSenderId: "798838681128",
  appId: "1:798838681128:web:fe003a9a0f88dea2c28f1d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
