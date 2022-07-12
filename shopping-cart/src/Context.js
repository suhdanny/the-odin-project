import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
	const [allItems, setAllItems] = useState();
	const url = 'https://fakestoreapi.com/products';

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(url);
			const data = await res.json();
			setAllItems(filterData(data));
		}
		fetchData();
	}, []);

	function filterData(arr) {
		return arr.filter(item => {
			return item.category === "men's clothing" || item.category === "women's clothing";
		});
	}

	return (
		<Context.Provider
			value={{
				allItems,
			}}>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
