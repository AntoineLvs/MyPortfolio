// src/components/Header.js
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function HeaderAntoine() {
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation(); // Pour obtenir l'URL actuelle

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getLinkClass = (path) => {
        return location.pathname === path ? 'text-orange-600' : 'text-white hover:text-orange-600';
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full font-roboto py-4 px-8 transition duration-300 ease-in-out ${scrolling ? 'bg-black bg-opacity-50' : 'bg-transparent'} z-50`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-4xl font-bold uppercase">Baroque <span className='text-orange-600'>Web</span></div>
                <nav>
                    <ul className="flex space-x-4 text-xl">
                        <li>
                            <Link to="/" className={getLinkClass('/')}>
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/offres" className={getLinkClass('/offres')}>
                                Offres
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={getLinkClass('/portfolio')}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={getLinkClass('/contact')}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipes" className={getLinkClass('/recipes')}>
                                Recipes
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderAntoine;
