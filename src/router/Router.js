import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../layout/Navigation';
import Weather from '../pages/Weather';
import PokemonList from '../pages/PokemonList';
import PokemonDetails from '../pages/PokemonDetails';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Weather />} />
                <Route path="/pokemon" element={<PokemonList />} />
                <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
