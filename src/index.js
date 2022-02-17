
//Always Make Sure to  [npm run build] after changing anything to rebuild your webpack

import { initializeApp } from "firebase/app";

import { getFirestore , collection ,doc,setDoc } from "firebase/firestore";

//const dotenv  = require("dotenv");

console.log("hello from index.js");

//Firebase Configuration : -
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //Initialize Firestore
  const db = getFirestore(app);


  

 // Form Selection
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()
  var ids=addBookForm.title.value;
    //Setting the id key for Document as email 
  setDoc(doc(db,"books",ids), {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  })
  .then(() => {
      //resetting form as a confirmation for submission 
    addBookForm.reset()
    console.log("submitted");
  })
})
