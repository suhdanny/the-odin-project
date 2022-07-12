import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ScrollTop from './ScrollTop';

const App = () => {
	return (
		<div className='font-sans px-40 py-8'>
			<Header />
			<ScrollTop>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</ScrollTop>
		</div>
	);
};

export default App;
