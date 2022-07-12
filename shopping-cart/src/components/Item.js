import React, { useContext } from 'react';
import { Context } from '../Context';

function Item({ item }) {
	const { addToCart } = useContext(Context);

	return (
		<div className='flex flex-col justify-center items-center gap-4 rounded-lg p-8'>
			<img className='h-60' src={item.image} alt={'product'} />
			<div className='font-bold text-center'>{item.title}</div>
			<div className='font-bold'>${item.price}</div>
			<button className='cursor-pointer capitalize bg-black text-white p-4 rounded-lg' onClick={() => addToCart(item)}>
				add to cart
			</button>
		</div>
	);
}

export default Item;
