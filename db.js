// Shared Firebase runtime for the Admin application.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { APP_CONFIG } from './app-config.js';

const app = initializeApp(APP_CONFIG.firebase);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { onAuthStateChanged };
