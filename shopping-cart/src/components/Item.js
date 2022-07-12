import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Item({ item }) {
	const { addToCart } = useContext(Context);
	const [hovered, setHovered] = useState(false);
	const [favorite, setFavorite] = useState(false);

	function heartIcon() {
		if (!favorite) {
			if (hovered) {
				return (
					<AiOutlineHeart
						size={25}
						style={{ fill: 'red', position: 'absolute', top: 20, right: 20, cursor: 'pointer' }}
						onClick={() => setFavorite(prev => !prev)}
					/>
				);
			}
		} else {
			return (
				<AiFillHeart
					size={25}
					style={{ fill: 'red', position: 'absolute', top: 20, right: 20, cursor: 'pointer' }}
					onClick={() => setFavorite(prev => !prev)}
				/>
			);
		}
	}

	return (
		<div
			className='flex flex-col justify-center items-center gap-4 rounded-lg p-8 relative'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			{heartIcon()}
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
