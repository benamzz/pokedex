import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/pokedex.css'


const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedGeneration, setSelectedGeneration] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pokebuildapi.fr/api/v1/pokemon');
                setPokemonData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleSelectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const handleSelectGeneration = (generation) => {
        setSelectedGeneration(generation);
    };

    const filteredPokemonData = selectedGeneration
        ? pokemonData.filter((pokemon) => pokemon.apiGeneration === selectedGeneration)
        : pokemonData;

    return (
        <div>
            <h2>Pokémon List</h2>
            <div className="generation-filter">
                <button onClick={() => handleSelectGeneration(1)}>Generation 1</button>
                <button onClick={() => handleSelectGeneration(2)}>Generation 2</button>
                <button onClick={() => handleSelectGeneration(3)}>Generation 3</button>
                <button onClick={() => handleSelectGeneration(null)}>All Generations</button>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="pokemon-list">
                    {filteredPokemonData.map((pokemon) => (
                        <Link
                            to={`/pokemon/${pokemon.id}`}
                            className={`pokemon-card ${pokemon.apiTypes[0].name} ${selectedPokemon === pokemon ? 'selected' : ''}`}
                            key={pokemon.id}
                            onClick={() => handleSelectPokemon(pokemon)}
                        >
                            <div className="pokemon-image">
                                <img src={pokemon.image} alt={pokemon.name} />
                            </div>
                            <div className="pokemon-id">Id: {pokemon.id}</div>
                            <div className="pokemon-name">Name: {pokemon.name}</div>
                            <div className="pokemon-type">Type: {pokemon.apiTypes.map((type) => type.name).join(', ')}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PokemonList;
