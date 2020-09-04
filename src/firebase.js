import firebase from "firebase"
  //it will be needed later for setup dr this is the backend  
const firebaseConfig = {
    apiKey: "AIzaSyCZRfvKRywY-S_0ka_qtb2QysYdq7VPgmA",
    authDomain: "facebook-clone-ae793.firebaseapp.com",
    databaseURL: "https://facebook-clone-ae793.firebaseio.com",
    projectId: "facebook-clone-ae793",
    storageBucket: "facebook-clone-ae793.appspot.com",
    messagingSenderId: "252645393345",
    appId: "1:252645393345:web:0fa5fb32c9eb72e4d8e540",
    measurementId: "G-FF2RP114TF"
  };
const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;