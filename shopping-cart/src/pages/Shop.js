import React, { useContext } from 'react';
import { Context } from '../contexts/Context';
import Item from '../components/content/Shop/Item';

function Shop() {
	const { allItems } = useContext(Context);

	const items = allItems.map(item => {
		return <Item key={item.id} item={item} />;
	});

	return <div className='grid grid-cols-3 mt-5'>{items}</div>;
}

export default Shop;
