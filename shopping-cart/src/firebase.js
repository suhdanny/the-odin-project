import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBlQK8cPfCPHVsw7_QcoBiXKtP1mv_Dvkk',
	authDomain: 'shopping-cart-e268f.firebaseapp.com',
	projectId: 'shopping-cart-e268f',
	storageBucket: 'shopping-cart-e268f.appspot.com',
	messagingSenderId: '646358424405',
	appId: '1:646358424405:web:f8a6429346b1fdffcceddc',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
