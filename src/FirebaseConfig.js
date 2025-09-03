import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDlfkONoe5tR4jVX6Y1SpUhM6PHPjlFZGQ',
  authDomain: 'catalog-eced6.firebaseapp.com',
  projectId: 'catalog-eced6',
  storageBucket: 'catalog-eced6.firebasestorage.app',
  messagingSenderId: '585823167682',
  appId: '1:585823167682:web:dc52fd4a65ad9e06f1c75b',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
