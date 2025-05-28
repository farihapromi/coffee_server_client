// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjEFR4wbkXS9sfpmFie3ZDc8XwaDWZ3lI',
  authDomain: 'coffee-server-99cdf.firebaseapp.com',
  projectId: 'coffee-server-99cdf',
  storageBucket: 'coffee-server-99cdf.firebasestorage.app',
  messagingSenderId: '686382571627',
  appId: '1:686382571627:web:8701cf2336b61d41e6d12e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
