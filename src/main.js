// Este es el punto de entrada de tu aplicacion

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore"

import { router } from './router/index.router.js';

router(window.location.hash);
window.addEventListener("hashchange", ()=>{
   router(window.location.hash)
})

