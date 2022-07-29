import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAE2Vw9Mf3KObi6Qgb4DQ2eovxIOysuJd8",
  authDomain: "gallery-1e6b3.firebaseapp.com",
  databaseURL: "https://gallery-1e6b3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gallery-1e6b3",
  storageBucket: "gallery-1e6b3.appspot.com",
  messagingSenderId: "243080375345",
  appId: "1:243080375345:web:a2bab03b8562bfa5fff910",
  measurementId: "G-MFD9FZHGDM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };