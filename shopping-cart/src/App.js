import React from 'react';
import Header from './pages/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ScrollTop from './components/utils/ScrollTop';
import { FooterUI } from './pages/Footer';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import Welcome from './components/authentication/Welcome';

const App = () => {
	return (
		<div className='font-sans px-40 py-8 flex flex-col justify-between min-h-screen gap-5'>
			<Header />
			<ScrollTop>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/sign-up' element={<Signup />} />
					<Route path='/log-in' element={<Login />} />
					<Route path='/welcome' element={<Welcome />} />
				</Routes>
			</ScrollTop>
			<FooterUI />
		</div>
	);
};

export default App;
