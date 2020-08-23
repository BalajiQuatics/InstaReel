import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBo0Dn4WnlbeZjgRMp3wzEdjoXb7HcIbsI",
    authDomain: "instareelclone.firebaseapp.com",
    databaseURL: "https://instareelclone.firebaseio.com",
    projectId: "instareelclone",
    storageBucket: "instareelclone.appspot.com",
    messagingSenderId: "168070829354",
    appId: "1:168070829354:web:661851bd22abca1071ba53",
    measurementId: "G-FJ521NJ09L"
  };

  const firebaseApp  = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore() 
  export default db;