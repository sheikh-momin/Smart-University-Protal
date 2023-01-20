// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2gAaB9iCvHUYIUHGUWqcK7_0AAw9-zUU",
  authDomain: "smartuniversityportal.firebaseapp.com",
  projectId: "smartuniversityportal",
  storageBucket: "smartuniversityportal.appspot.com",
  messagingSenderId: "318109823597",
  appId: "1:318109823597:web:a22dc6a9dab4fd56ed4564",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app