import { ENV } from './../../env';

export const environment = {
  production: true,
  firebase: {
    apiKey: ENV.FIREBASE_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.DATABASE_URL,
    storageBucket: ENV.STORAGE_BUCKET,
    projectId: ENV.PROJECT_ID,
    messagingSenderId: ENV.MESSAGING_SENDERID,
  }
};
