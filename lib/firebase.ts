"use client";

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC33l9lKNn44EanpFY3xMsuUaNtMfHCTrE",
  authDomain: "y2k-academy.firebaseapp.com",
  projectId: "y2k-academy",
  storageBucket: "y2k-academy.appspot.com",
  messagingSenderId: "760799818085",
  appId: "1:760799818085:web:8c06b82abe6c3249e2b18c"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const isFirebaseEnabled = true;

export { db, isFirebaseEnabled };
export default app;
