import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon.js';
import { Link } from 'react-router-dom';

function PokemonCatalogue({ page }) {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page * 20}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                }));
                setPokemonData(pokemonDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: "10px", display: "flex", gap: "30px", flexWrap: "wrap" }}>
            {pokemonData.map((pokemon, index) => (
                <Link key={index} to={`/About/${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <Pokemon pokemon={pokemon} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PokemonCatalogue;
