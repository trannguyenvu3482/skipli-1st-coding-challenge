const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Get the environment variable FIREBASE_PRIVATE_KEY, base64 decode it and parse it as JSON
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_PRIVATE_KEY, 'base64').toString('ascii')
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = { db };
