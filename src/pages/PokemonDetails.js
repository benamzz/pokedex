import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const PokemonDetails = () => {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`);
                setPokemon(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [pokemonId]);

    if (isLoading) {
        return (
            <div className="loader">
                <ClipLoader color="#ffffff" size={50} />
            </div>
        );
    }

    if (!pokemon) {
        return <p>Pokemon not found.</p>;
    }

    return (
        <div className="pokemon-details">

            <div className="pokemon-card">

                <div className="pokemon-image">
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="pokemon-info">
                    <div>
                        <div>Id: {pokemon.id}</div>
                        <div>Name: {pokemon.name}</div>
                        <div>Type: {pokemon.apiTypes.map((type) => type.name).join(', ')}</div>
                        <div>HP: {pokemon.stats.hp}</div>
                        <div>Attack: {pokemon.stats.attack}</div>
                        <div>Defense: {pokemon.stats.defense}</div>
                        <div>Special Attack: {pokemon.stats.specialAttack}</div>
                        <div>Special Defense: {pokemon.stats.specialDefense}</div>
                        <div>Speed: {pokemon.stats.speed}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
