import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyBlQK8cPfCPHVsw7_QcoBiXKtP1mv_Dvkk',
	authDomain: 'shopping-cart-e268f.firebaseapp.com',
	projectId: 'shopping-cart-e268f',
	storageBucket: 'shopping-cart-e268f.appspot.com',
	messagingSenderId: '646358424405',
	appId: '1:646358424405:web:f8a6429346b1fdffcceddc',
});

export const auth = app.auth();
export const db = getFirestore(app);
export default app;
