import React from 'react';
import { AiOutlineUser, AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<ul className='flex justify-around items-center py-4'>
				<Link to='/'>
					<li className='uppercase font-bold text-4xl cursor-pointer'>Fashion.</li>
				</Link>
				<div className='flex gap-7 text-xl items-center'>
					<Link to='/shop'>
						<li className='cursor-pointer'>
							<AiOutlineShopping size={30} />
						</li>
					</Link>
					<Link to='/cart'>
						<li className='cursor-pointer'>
							<AiOutlineShoppingCart size={30} />
						</li>
					</Link>
					<Link to='/'>
						<li className='cursor-pointer'>
							<AiOutlineUser size={30} />
						</li>
					</Link>
				</div>
			</ul>
		</header>
	);
}

export default Header;
