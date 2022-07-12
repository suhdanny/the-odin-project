import React from 'react';

function Image({ src, quote }) {
	return (
		<div className='bg-no-repeat bg-cover m-5 relative' style={{ backgroundImage: `url(images/${src}.jpeg)`, height: 700 }}>
			<h1 className='absolute bottom-10 text-red-400 font-black uppercase p-10'>{quote}</h1>
		</div>
	);
}

export default Image;
