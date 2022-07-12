import React from 'react';
import Slide from '../components/Slide';
import BestSlide from '../components/BestSlide';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='mt-8'>
			<Slide />
			<div className='mt-6 p-4 mb-6 text-center'>
				<h1 className='text-center text-black font-bold text-2xl uppercase mb-3'>Best Seller</h1>
				<BestSlide />
				<Link to={'/shop'}>
					<button className='mt-16 border-gray-400 border-2 px-32 py-4 uppercase font-bold cursor-pointer hover:bg-gray-100'>
						View All
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
