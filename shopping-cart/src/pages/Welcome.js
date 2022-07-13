import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
	return (
		<div className='text-center'>
			<h1 className='font-bold text-xl'>Welcome to FASHION!</h1>
			<Link to='/'>
				<button className='text-white bg-black px-32 py-2 rounded-md mt-10 font-bold'>Shop Now</button>
			</Link>
		</div>
	);
}

export default Welcome;
