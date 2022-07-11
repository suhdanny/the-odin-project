import React from 'react';
import { AiOutlineHeart, AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';

function Header() {
	return (
		<header>
			<ul className='flex justify-around items-center px-2 py-4'>
				<li className='uppercase font-bold text-4xl cursor-pointer'>Musinsa</li>
				<div className='flex gap-7 text-xl items-center'>
					<li className='cursor-pointer'>
						<AiOutlineHeart size={30} style={{ fill: 'red' }} />
					</li>
					<li className='cursor-pointer'>
						<AiOutlineShopping size={30} />
					</li>
					<li className='cursor-pointer'>
						<AiOutlineShoppingCart size={30} />
					</li>
				</div>
			</ul>
		</header>
	);
}

export default Header;
