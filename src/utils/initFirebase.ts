import admin from 'firebase-admin';
import { loadEnv } from './loadEnv.js';

loadEnv();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
