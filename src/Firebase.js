import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
     apiKey: "AIzaSyAF0M_k3DjmgSy7oNztPZj_9eXJ-AhMR_w",
     authDomain: "netflix-clone-dede9.firebaseapp.com",
     projectId: "netflix-clone-dede9",
     storageBucket: "netflix-clone-dede9.appspot.com",
     messagingSenderId: "954357646659",
     appId: "1:954357646659:web:ff43bffa9dc351ee289bf6",
     measurementId: "G-8QZJDWVNBC"
   };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth =firebase.auth();

   export { auth };
   export default db; 