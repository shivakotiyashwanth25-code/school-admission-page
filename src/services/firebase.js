import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBP1Fu1zTBuWgEJkJUCp1BHujXQIuGSigY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "school-9edfd.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "school-9edfd",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "school-9edfd.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "112154267344",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:112154267344:web:90773c50ed64e6620358d5",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-GC3D5R4M2K"
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const googleProvider = new GoogleAuthProvider();

export function subscribeToAuth(callback) {
  if (!auth) {
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, callback);
}

export function signInWithGoogle() {
  if (!auth) {
    throw new Error("Firebase is not configured. Add your Firebase values to .env or Vercel environment variables.");
  }

  return signInWithPopup(auth, googleProvider);
}

export function signOutUser() {
  if (!auth) return Promise.resolve();
  return signOut(auth);
}
