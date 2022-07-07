import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Card from './Card';
import Score from './Score';

function Main() {
	const COUNT = 12;

	const [pokemons, setPokemons] = useState([]);
	const [clickedPokemons, setClickedPokemons] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

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

	function shuffle(arr) {
		return arr
			.map(value => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	}

	function shufflePokemons() {
		setPokemons(prev => shuffle(prev));
	}

	function handleClick(id) {
		if (clickedPokemons.includes(id)) {
			if (currentScore > bestScore) {
				setBestScore(currentScore);
			}
			setCurrentScore(0);
		} else {
			setClickedPokemons(prev => [...prev, id]);
			setCurrentScore(prev => prev + 1);
		}

		shufflePokemons();
	}

	const pokemonCards = pokemons.map(pokemon => {
		return <Card key={pokemon.id} name={pokemon.name} url={pokemon.url} handleClick={() => handleClick(pokemon.id)} />;
	});

	return (
		<main>
			<Score current={currentScore} best={bestScore} />
			<div className='pokemon-grid'>{pokemonCards}</div>
		</main>
	);
}

export default Main;
