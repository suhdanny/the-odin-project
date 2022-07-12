import React, { useContext } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
	const { cartItems } = useContext(Context);
	const price = cartItems.reduce(getSum, 0);

	function getSum(total, item) {
		return total + item.price;
	}

	const cartElements = cartItems.map(item => {
		return <CartItem key={item.id} item={item} />;
	});

	return (
		<main className='flex flex-col items-center mt-5 gap-7'>
			<div className='font-bold text-3xl'>Cart</div>
			<div className='flex w-full'>
				<div className='w-9/12 flex flex-col px-10 gap-10'>
					<hr className='w-full h-1' />
					{cartElements}
				</div>
				<div className='w-3/12 flex flex-col gap-5 ml-8'>
					<div className='font-bold'>Shopping Cart</div>
					<div>
						Price <span className='float-right'>{price}</span>
					</div>
					<div>
						Shipping <span className='float-right'>$10</span>
					</div>
					<div className='font-bold'>
						Total <span className='float-right'>{price + 10}</span>
					</div>
					<button className='font-bold text-white bg-black rounded-md px-10 py-2'>Check out</button>
				</div>
			</div>
		</main>
	);
}

export default Cart;
