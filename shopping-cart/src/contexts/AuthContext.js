import React, { createContext, useContext, useState, useEffect } from 'react';
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
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function login(email, password) {
		setLoggedIn(true);
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		setLoggedIn(false);
		return auth.signOut();
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
