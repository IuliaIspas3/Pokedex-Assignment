import React, { useState, useEffect } from 'react';


function PokemonDetails({ id }) {
    const [pokemonData, setPokemonData] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                
                setPokemonData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const { name, sprites, types, height, weight, abilities } = pokemonData;

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF3CF",
        width: "400px",
        height: "auto",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        borderRadius: "10px",
        margin: "auto",
        padding: "20px"
    };

    const imgStyle = {
        width: "200px",
        height: "200px",
        marginBottom: "20px",
    };

    const textStyle = {
        fontFamily: 'Jersey 20, sans-serif',
        fontSize: "16px",
        textAlign: "center",
        fontWeight: "bold"
    };

    return (
        <div style={containerStyle}> 
            {sprites && sprites.front_default && ( 
                <img src={sprites.front_default} alt={name} style={imgStyle} /> 
            )}
            <div style={textStyle}>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                {types && types[0] && (
                    <p>Primary Type: {types[0].type.name}</p>
                )}
                {types && types[1] && (
                    <p>Secondary Type: {types[1].type.name}</p>
                )}
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <div>
                    {abilities.map((ability, index) => (
                    <div key={index}>
                        <p>Ability {index + 1}: {ability.ability.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;
