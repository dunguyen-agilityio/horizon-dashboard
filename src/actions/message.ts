'use server';

// Firebase
import admin from 'firebase-admin';
import { getMessaging } from 'firebase-admin/messaging';

// Constants
import {
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PROJECT_ID,
} from '@/constants';

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: FIREBASE_CLIENT_EMAIL,
    projectId: FIREBASE_PROJECT_ID,
    privateKey: FIREBASE_PRIVATE_KEY,
  }),
});

export const sendMessage = async (
  registrationToken: string,
  data: { [key: string]: string },
) => {
  const message = {
    data,
    token: registrationToken,
  };

  getMessaging()
    .send(message)
    .then((response) => {
      // TODO: Handle when successfully sent message
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      // TODO: Handle when error sent message
      console.log('Error sending message:', error);
    });
};
