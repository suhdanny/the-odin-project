import React from 'react';
import { AiOutlineUser, AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<ul className='flex items-center py-4 w-full'>
				<Link to='/'>
					<li className='uppercase font-bold text-4xl cursor-pointer'>Fashion.</li>
				</Link>
				<div className='flex gap-8 text-xl items-center ml-auto'>
					<Link to='/shop'>
						<li className='cursor-pointer'>
							<AiOutlineShopping size={40} />
						</li>
					</Link>
					<Link to='/cart'>
						<li className='cursor-pointer relative'>
							<div className='absolute -top-4 -right-5 bg-black text-white rounded-full w-6 h-6 flex justify-center items-center'>
								1
							</div>
							<AiOutlineShoppingCart size={40} />
						</li>
					</Link>
					<Link to='/'>
						<li className='cursor-pointer'>
							<AiOutlineUser size={40} />
						</li>
					</Link>
				</div>
			</ul>
		</header>
	);
}

export default Header;
