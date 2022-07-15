import React, { useContext } from 'react';
import { Context } from '../../../contexts/Context';

function CartItem({ item }) {
	const { removeFromCart } = useContext(Context);

	return (
		<div className='flex items-center gap-3'>
			<img className='w-20 h-20 mr-3' src={item.image} alt='product' />
			<div className='mr-auto font-bold'>{item.title}</div>
			<div className='font-bold'>{item.price}</div>
			<div className='text-2xl cursor-pointer -translate-y-0.5' onClick={() => removeFromCart(item.id)}>
				&#215;
			</div>
		</div>
	);
}

export default CartItem;
