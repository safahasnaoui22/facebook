import firebase from 'firebase/compat/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


 const firebaseConfig = {
   apiKey: "AIzaSyA0oSAZzbuwPVhdNz9h7p7VQ2vdJTIjxuw",
   authDomain: "facebook-50116.firebaseapp.com",
   projectId: "facebook-50116",
   storageBucket: "facebook-50116.appspot.com",
   messagingSenderId: "446901557941",
   appId: "1:446901557941:web:b9ed7adce1326385a3bcfc",
   measurementId: "G-0KM066Q59L"
 };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 
 export {   auth, provider };
 export default db;