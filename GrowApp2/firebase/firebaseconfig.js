// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// las variables se encuentran en env y se invocan aqui


    const firebaseConfig = {
      apiKey: "AIzaSyAyshk-91pQvFkqZaEon16XFH1yJp6TOh0",
      authDomain: "fir-react-635f6.firebaseapp.com",
      projectId: "fir-react-635f6",
      storageBucket: "fir-react-635f6.appspot.com",
      messagingSenderId: "849090807261",
      appId: "1:849090807261:web:4e434151b2a8c0b94ba234"
      /*   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
        storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET ,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_FIREBASE_APPID, */
        
      };
     
          // Initialize Firebase
          console.log(firebaseConfig);
          console.log("prueba");
            const app = initializeApp(firebaseConfig);

            export const db = getFirestore(app);
           
           
      

