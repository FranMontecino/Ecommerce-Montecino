import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoTRaMF4WDT97kMB4R_E6HW133_w-J4XQ",
  authDomain: "gamestate-ecommerce.firebaseapp.com",
  projectId: "gamestate-ecommerce",
  storageBucket: "gamestate-ecommerce.appspot.com",
  messagingSenderId: "652286074567",
  appId: "1:652286074567:web:23c3ea947104c3b848e8e2"
};

initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,document.getElementById("root")
); 

reportWebVitals();
