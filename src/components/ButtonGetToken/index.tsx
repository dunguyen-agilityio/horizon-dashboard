'use client';

import { app } from '@/config/firebaseConfig';
import { getMessaging, getToken } from 'firebase/messaging';
import React from 'react';

export default function MessagingContainer() {
  const handleGetToken = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          'BPGr9cy5htGyGnNsNrvh2M18kGXXYHaGgPIHmeU1eesHqDxFhP-q0eQuK2I_XbZSXDMOOCifLR-QSpd89hfl5Fs',
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log('currentToken: ', currentToken);
          } else {
            console.log(
              'No registration token available. Request permission to generate one.',
            );
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };
  return (
    <button
      className="bg-yellow-400 w-full py-2 text-center text-gray-500 rounded-md"
      onClick={handleGetToken}
      type="button"
    >
      Get Token
    </button>
  );
}
