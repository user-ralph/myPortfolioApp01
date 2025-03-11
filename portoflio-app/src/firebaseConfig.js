// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC1ffddmzBWPIESNJoL6uzLCbg6KS8AC5g",
  authDomain: "my-portfolio-app-bc760.firebaseapp.com",
  databaseURL: "https://my-portfolio-app-bc760-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-app-bc760",
  storageBucket: "my-portfolio-app-bc760.firebasestorage.app",
  messagingSenderId: "673301689103",
  appId: "1:673301689103:web:6bbad93ae34ca0741a447a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the app object
export { database };