import React, { createContext, useContext } from 'react';
import { db } from '../components/authentication/firebase';
import { collection, addDoc } from 'firebase/firestore';

const DbContext = createContext();

export function useDb() {
	return useContext(DbContext);
}

export function DbProvider({ children }) {
	function addItem(key, value) {
		return addDoc(collection(db, key), value);
	}

	const value = {
		addItem,
	};

	return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
