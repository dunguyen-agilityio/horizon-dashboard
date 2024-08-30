'use server';

// Firebase
import admin from 'firebase-admin';
import { getMessaging } from 'firebase-admin/messaging';
import serviceAccount from '../../serviceAccountKey.json';

const { clientEmail, projectId, privateKey } = serviceAccount;

admin.initializeApp({
  credential: admin.credential.cert({ clientEmail, projectId, privateKey }),
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
