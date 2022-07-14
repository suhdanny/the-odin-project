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
			const items = data.map(item => {
				return { ...item, isFavorite: false };
			});
			setAllItems(filterData(items));
		}
		fetchData();
	}, []);

	function filterData(arr) {
		return arr.filter(item => {
			return item.category === "men's clothing" || item.category === "women's clothing";
		});
	}

	function toggleFavorite(id) {
		const updatedItems = allItems.map(item => {
			if (item.id === id) {
				return { ...item, isFavorite: !item.isFavorite };
			}
			return item;
		});
		setAllItems(updatedItems);
	}

	function removeAllFavorite() {
		const removedItems = allItems.map(item => {
			if (item.isFavorite) {
				return { ...item, isFavorite: false };
			}
			return item;
		});
		setAllItems(removedItems);
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

	function emptyCart() {
		setCartItems([]);
	}

	return (
		<Context.Provider
			value={{
				setAllItems,
				setCartItems,
				allItems,
				cartItems,
				addToCart,
				removeFromCart,
				emptyCart,
				toggleFavorite,
				removeAllFavorite,
			}}>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
