import React from 'react';

export default function Score(props) {
	return (
		<div className='score'>
			<div className='current'>Current Score: {props.current}</div>
			<div className='best'>Best Score: {props.best}</div>
		</div>
	);
}
