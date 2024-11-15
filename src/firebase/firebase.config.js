// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAbTsSSSbaebu-X3P87OKBAfGUBY-dums0',
    authDomain: 'dragon-news-d6218.firebaseapp.com',
    projectId: 'dragon-news-d6218',
    storageBucket: 'dragon-news-d6218.firebasestorage.app',
    messagingSenderId: '814613065832',
    appId: '1:814613065832:web:94af5dcc83af5c4dd88bdd'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;