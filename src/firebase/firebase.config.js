// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8j2fwv3YUeXv-PRyuoSccOB-fK0P73N0",
  authDomain: "assign4client.firebaseapp.com",
  projectId: "assign4client",
  storageBucket: "assign4client.appspot.com",
  messagingSenderId: "32898034447",
  appId: "1:32898034447:web:c90ccf7d04470bdc42ac7a",
  measurementId: "G-2SYYJKSL3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
//const analytics = getAnalytics(app);