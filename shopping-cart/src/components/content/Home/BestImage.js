import React from 'react';

export function BestImage({ id }) {
	return (
		<div
			key={id}
			className='bg-cover bg-no-repeat bg-center relative m-5'
			style={{ backgroundImage: `url(images/best-${id}.jpeg)`, height: 350 }}>
			<h1 className='absolute left-4 top-2 text-3xl text-red-400 font-bold'>{id}</h1>
		</div>
	);
}
