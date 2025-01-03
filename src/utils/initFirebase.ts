import admin from 'firebase-admin';
import { loadEnv } from './loadEnv.js';

loadEnv();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_BUCKET_NAME,
});

export const bucket = admin.storage().bucket();

export default admin;
