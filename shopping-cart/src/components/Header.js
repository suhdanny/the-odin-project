import React, { useContext } from 'react';
import { Context } from '../contexts/Context';
import { AiOutlineHome, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
	const { cartItems } = useContext(Context);

	return (
		<header>
			<ul className='flex items-center py-4 w-full'>
				<Link to='/'>
					<li className='uppercase font-bold text-4xl cursor-pointer'>Fashion.</li>
				</Link>
				<div className='flex gap-8 text-xl items-center ml-auto'>
					<Link to='/'>
						<li className='cursor-pointer'>
							<AiOutlineHome size={40} />
						</li>
					</Link>
					<Link to='/shop'>
						<li className='cursor-pointer'>
							<AiOutlineShopping size={40} />
						</li>
					</Link>
					<Link to='/cart'>
						<li className='cursor-pointer relative'>
							{cartItems.length > 0 && (
								<div className='absolute -top-4 -right-5 bg-black text-white rounded-full w-6 h-6 flex justify-center items-center'>
									{cartItems.length}
								</div>
							)}
							<AiOutlineShoppingCart size={40} />
						</li>
					</Link>
					<Link to='/sign-up'>
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
