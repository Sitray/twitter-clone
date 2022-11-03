'use strict';
const admin = require('firebase-admin');

//@ts-ignore
//const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);
import serviceAccount from './firebase-keys.json';

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (error) {}

export const firestore = admin.firestore();
