import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAwE0j6VyQ6Xb9kl_cr-oSwYM2DKLT20Jo',
  authDomain: 'horizon-dashboard-4bffe.firebaseapp.com',
  projectId: 'horizon-dashboard-4bffe',
  storageBucket: 'horizon-dashboard-4bffe.appspot.com',
  messagingSenderId: '742731045164',
  appId: '1:742731045164:web:c85eccd119d92416907489',
  measurementId: 'G-TL9295T2FX',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
