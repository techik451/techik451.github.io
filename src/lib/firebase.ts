import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  type Firestore,
  connectFirestoreEmulator
} from 'firebase/firestore';

let firebaseApp: FirebaseApp | undefined;
let firestore: Firestore | null = null;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (firebaseConfig.projectId) {
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApps()[0];
  }
  firestore = getFirestore(firebaseApp);

  if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' && firestore) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
  }
}

export { firebaseApp, firestore };
