import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDh2ZM3zIVKjuTGJsc-aCpfpqkLXQWTkWI",
  authDomain: "kitabuai.firebaseapp.com",
  projectId: "kitabuai",
  storageBucket: "kitabuai.appspot.com",
  messagingSenderId: "313416624091",
  appId: "1:313416624091:web:92b01a1cae4ee5f6ad69fe",
  measurementId: "G-SH4V2YLNPJ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);