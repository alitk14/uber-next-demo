import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdPCtSf-m3p4MIkMb8E8AtN1FagawDE7o",
  authDomain: "uber-next-clone-1e44e.firebaseapp.com",
  projectId: "uber-next-clone-1e44e",
  storageBucket: "uber-next-clone-1e44e.appspot.com",
  messagingSenderId: "574175045130",
  appId: "1:574175045130:web:e73dc71cda2ff444c921f3",
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();



export { app, auth, provider };