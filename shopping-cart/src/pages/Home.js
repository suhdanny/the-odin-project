import React from 'react';
import Slide from '../components/content/Slide';
import { BestItems } from '../components/content/BestItems';

function Home() {
	return (
		<div className='mt-8'>
			<Slide />
			<BestItems />
		</div>
	);
}

export default Home;
