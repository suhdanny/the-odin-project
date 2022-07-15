import React from 'react';
import Slide from '../components/content//Home/Slide';
import { BestItems } from '../components/content/Home/BestItems';

function Home() {
	return (
		<div className='mt-8'>
			<Slide />
			<BestItems />
		</div>
	);
}

export default Home;
