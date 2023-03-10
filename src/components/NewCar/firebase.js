// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_ffJgjKGU2a7huOC81EYkHVCVbDrpJvk',
  authDomain: 'wheels-and-deals-33315.firebaseapp.com',
  projectId: 'wheels-and-deals-33315',
  storageBucket: 'wheels-and-deals-33315.appspot.com',
  messagingSenderId: '19113842345',
  appId: '1:19113842345:web:c661cee9a28144038bfbb8',
  measurementId: 'G-2NLFBR3S16',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
