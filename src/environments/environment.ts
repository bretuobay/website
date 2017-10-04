import { ENV } from './../../env';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: ENV.FIREBASE_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.DATABASE_URL,
    storageBucket: ENV.STORAGE_BUCKET,
    projectId: ENV.PROJECT_ID,
    messagingSenderId: ENV.MESSAGING_SENDERID
  },
  cloudinary_api: ENV.CLOUDINARY_URL
};
