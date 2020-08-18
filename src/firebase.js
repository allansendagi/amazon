import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrUdXOChbz6KOlEhlbo6j7bv3A3Mg7efU",
  authDomain: "fir-2f973.firebaseapp.com",
  databaseURL: "https://fir-2f973.firebaseio.com",
  projectId: "fir-2f973",
  storageBucket: "fir-2f973.appspot.com",
  messagingSenderId: "54419935339",
  appId: "1:54419935339:web:44aca741c8d5f2a46fa12e",
  measurementId: "G-1M0CVT681V"
})

const auth = firebase.auth();

export { auth };