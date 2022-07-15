import React, { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loggedIn, setLoggedIn] = useState(false);

	function signup(email, password) {
		setLoggedIn(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		setLoggedIn(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		setLoggedIn(false);
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		logout,
		loggedIn,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
