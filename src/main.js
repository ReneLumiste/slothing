import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBzNHpf2vN5_63gaNfRtw7nQGkzcV_RY1M",
    authDomain: "slothing-6cd76.firebaseapp.com",
    projectId: "slothing-6cd76",
    storageBucket: "slothing-6cd76.appspot.com",
    messagingSenderId: "135508009080",
    appId: "1:135508009080:web:84c50ad42189127ded0d8d",
    measurementId: "G-D08EQNXFC0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App).use(router).mount("#app");