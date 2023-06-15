// remember add firebase
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyC9kG1N82hhBJg4thBA5nd62DtW074tqvo",
  authDomain: "netflix-clone-87aee.firebaseapp.com",
  projectId: "netflix-clone-87aee",
  storageBucket: "netflix-clone-87aee.appspot.com",
  messagingSenderId: "14352794986",
  appId: "1:14352794986:web:1a3dffd1cd596d7554d113"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {auth};
export default {db};