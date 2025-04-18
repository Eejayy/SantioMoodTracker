// config.js file for generic use
// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPSIaP-C20Hf1MFn0efE-jIMBSIGqdgDc",
    authDomain: "santio-4b3ba.firebaseapp.com",
    projectId: "santio-4b3ba",
    storageBucket: "santio-4b3ba.firebasestorage.app",
    messagingSenderId: "954824220906",
    appId: "1:954824220906:web:c5c861c161594014553793",
    measurementId: "G-J2HHELZRD3"
  };
  
  // Initialize Firebase
  function initializeFirebase() {
    // Check if Firebase already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    return {
      auth: firebase.auth(),
      db: firebase.firestore()
    };
  }