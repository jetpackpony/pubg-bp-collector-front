import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
};

const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  return {
    sendBPData(data) {
      const newData = {
        ...data,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date())
      };
      console.log("sending bp data: ", newData);
      return db.collection("bpRecord").add(newData);
    }
  };
};

export default initFirebase;