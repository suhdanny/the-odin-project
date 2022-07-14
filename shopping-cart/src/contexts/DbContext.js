import React, { createContext, useContext } from 'react';
import { db } from '../components/authentication/firebase';
import { doc as document, setDoc, getDoc, collection } from 'firebase/firestore';

const DbContext = createContext();

export function useDb() {
	return useContext(DbContext);
}

export function DbProvider({ children }) {
	function addItemToDb(col, doc, data) {
		return setDoc(document(db, col, doc), data);
	}

	async function getItemFromDb(email, doc) {
		const docRef = document(db, email, doc);
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	}

	const value = {
		addItemToDb,
		getItemFromDb,
	};

	return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
