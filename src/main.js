import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from './router/router.js';
import './data/projects.js';
import './style/home.css';
import './style/tailwind.css';

import { MotionPlugin } from '@vueuse/motion'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDxCzhSPURwG3C0UP1xYIAeR9VWE8FWdXk",
    authDomain: "personal-portfolio-2102f.firebaseapp.com",
    databaseURL: "https://personal-portfolio-2102f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "personal-portfolio-2102f",
    storageBucket: "personal-portfolio-2102f.appspot.com",
    messagingSenderId: "958453690559",
    appId: "1:958453690559:web:1832d2bdc392130474960a",
    measurementId: "G-224X2F5XH8",
};

// firebase init 설정
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db나 auth 같이 사용
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


import jQuery from "jquery";
const $ = jQuery;
window.$ = $;



const app = createApp(App);

app.use(MotionPlugin);
app.use(router);


app.mount("#app");