import React from 'react';
import Slide from '../components/Slide';
import { BestItems } from '../components/BestItems';

function Home() {
	return (
		<div className='mt-8'>
			<Slide />
			<BestItems />
		</div>
	);
}

export default Home;
