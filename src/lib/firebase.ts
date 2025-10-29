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

const firebaseEnvKeyMap: Record<keyof typeof firebaseConfig, string> = {
  apiKey: 'NEXT_PUBLIC_FIREBASE_API_KEY',
  authDomain: 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  projectId: 'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  storageBucket: 'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'NEXT_PUBLIC_FIREBASE_APP_ID'
};

const requiredFirebaseKeys: (keyof typeof firebaseConfig)[] = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId'
];

const missingFirebaseKeys = requiredFirebaseKeys.filter((key) => !firebaseConfig[key]);
const missingFirebaseEnvVars = missingFirebaseKeys.map((key) => firebaseEnvKeyMap[key]);
const isFirebaseConfigured = missingFirebaseKeys.length === 0;

if (!isFirebaseConfigured && process.env.NODE_ENV !== 'production') {
  console.warn(`Firebase is not fully configured. Missing keys: ${missingFirebaseEnvVars.join(', ')}`);
}

if (isFirebaseConfigured) {
  try {
    if (!getApps().length) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      firebaseApp = getApps()[0];
    }

    firestore = getFirestore(firebaseApp);

    if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' && firestore) {
      connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
    }
  } catch (error) {
    console.error('Failed to initialize Firebase', error);
  }
}

export { firebaseApp, firestore, isFirebaseConfigured };
