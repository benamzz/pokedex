import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className="navigation-menu">
                <li>
                    <Link to="/" className="navigation-link">
                        Page Weather
                    </Link>
                </li>
                <li>
                    <Link to="/pokemon" className="navigation-link">
                        Page Pokedex
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
