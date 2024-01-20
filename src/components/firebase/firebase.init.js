// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwCA3SuF21EEHdN7ltcvwYqto-CF2rwpo",
  authDomain: "useradminapps.firebaseapp.com",
  databaseURL: "https://useradminapps-default-rtdb.firebaseio.com/",
  projectId: "useradminapps",
  storageBucket: "useradminapps.appspot.com",
  messagingSenderId: "235152290135",
  appId: "1:235152290135:web:dcd231e164303744a54e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default app;
export { database };