import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes/Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as firebase from "firebase/app";
import { AuthProvider } from './components/Providers/AuthProvider/AuthProvider';
import { getFirestore } from "firebase/firestore"

// Initialize Firebase
const FIREBASE = firebase.initializeApp({
  apiKey: "AIzaSyAbxkRqn8ooiNoZ7fXZYiWkpp8vj4D82sg",
  authDomain: "vk-copy-f740a.firebaseapp.com",
  projectId: "vk-copy-f740a",
  storageBucket: "vk-copy-f740a.appspot.com",
  messagingSenderId: "735553240155",
  appId: "1:735553240155:web:ce962010750782a4bb937e"
});

const db = getFirestore(FIREBASE)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
