import React, { useContext } from 'react';
import { Context } from '../contexts/Context';
import { AiOutlineHome, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Dropdown, Button, Card } from 'react-daisyui';

function Header() {
	const { cartItems } = useContext(Context);
	const { loggedIn, logout, currentUser } = useAuth();

	return (
		<header>
			<ul className='flex items-center py-4 w-full'>
				<Link to='/'>
					<li className='uppercase font-bold text-4xl cursor-pointer'>Fashion.</li>
				</Link>
				<div className='flex text-xl items-center ml-auto'>
					<Link to='/'>
						<Button color='ghost'>
							<AiOutlineHome size={40} />
						</Button>
					</Link>
					<Link to='/shop'>
						<Button color='ghost'>
							<AiOutlineShopping size={40} />
						</Button>
					</Link>
					<Link to='/cart'>
						<Button color='ghost' className='relative'>
							{cartItems.length > 0 && (
								<div className='absolute -top-3 -right-0 bg-black text-white rounded-full w-6 h-6 flex justify-center items-center'>
									{cartItems.length}
								</div>
							)}
							<AiOutlineShoppingCart size={40} />
						</Button>
					</Link>
					{!loggedIn ? (
						<Link to='/sign-up'>
							<Button color='ghost'>
								<AiOutlineUser size={40} />
							</Button>
						</Link>
					) : (
						<li>
							<Dropdown dataTheme='light'>
								<Dropdown.Toggle color='ghost'>
									<AiOutlineUser size={40} />
								</Dropdown.Toggle>
								<Dropdown.Menu className='card card-compact w-72 p-2 shadow bg-neutral-content text-neural m-1'>
									<Card.Body>
										<Card.Title tag={'h4'} className='text-sm'>
											{currentUser && currentUser.email}
										</Card.Title>
										<Card.Actions className='flex flex-col cursor-pointer text-sm gap-4 mt-2'>
											<div>My Orders</div>
											<div>Addresses</div>
											<div>Help centre</div>
										</Card.Actions>
									</Card.Body>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					)}
					{loggedIn && (
						<Link to='/'>
							<Button color='ghost' onClick={logout}>
								Sign Out
							</Button>
						</Link>
					)}
				</div>
			</ul>
		</header>
	);
}

export default Header;
