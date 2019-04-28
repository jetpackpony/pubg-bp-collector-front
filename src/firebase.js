import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvCaLrm6qZooSzIUbPpWxnjIkQ8jrvPSo",
  authDomain: "pubg-bp-collector.firebaseapp.com",
  databaseURL: "https://pubg-bp-collector.firebaseio.com",
  projectId: "pubg-bp-collector",
  storageBucket: "pubg-bp-collector.appspot.com",
  messagingSenderId: "716604938921"
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