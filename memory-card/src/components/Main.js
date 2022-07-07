import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Card from './Card';

function Main() {
	const COUNT = 12;
	const [pokemons, setPokemons] = useState([]);

	function shuffle(arr) {
		return arr
			.map(value => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	}

	useEffect(() => {
		async function getPokemons() {
			const pokemonArr = [];
			for (let i = 1; i <= COUNT; i++) {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${i}/`);
				const data = await response.json();
				pokemonArr.push({
					name: data.pokemon.name,
					url: data.sprites.front_default,
					id: nanoid(),
				});
			}
			return pokemonArr;
		}

		getPokemons().then(res => setPokemons(shuffle(res)));
	}, []);

	const pokemonCards = pokemons.map(pokemon => {
		return <Card key={pokemon.id} name={pokemon.name} url={pokemon.url} />;
	});

	return (
		<main>
			<div className='pokemon-grid'>{pokemonCards}</div>
		</main>
	);
}

export default Main;
