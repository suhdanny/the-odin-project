import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
	const [allItems, setAllItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
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

	function addToCart(newItem) {
		setCartItems(prev => {
			return [...prev, newItem];
		});
	}

	function removeFromCart(id) {
		setCartItems(prev => {
			return prev.filter(item => item.id !== id);
		});
	}

	return (
		<Context.Provider
			value={{
				allItems,
				cartItems,
				addToCart,
				removeFromCart,
			}}>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
