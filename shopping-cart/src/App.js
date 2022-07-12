import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const App = () => {
	return (
		<div className='font-sans'>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
};

export default App;
