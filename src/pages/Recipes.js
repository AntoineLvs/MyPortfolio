// src/pages/Recipes.js
import React, { useEffect, useRef } from 'react';
import headerMacImage from '../assets/header-mac-white.jpg'; // Remplace par ton image de fond pour la nouvelle section
import pierreAntoineImage from '../assets/pierre_antoine.png'; // Remplace par ton image pour la section
import handWritingImage from '../assets/hand-writing.jpg';
import RecipeSection from '../components/RecipeSection';

function Recipes() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const parallaxEffect = () => {
            const section = document.querySelector('.parallax-section');
            const offset = window.scrollY; // Utiliser scrollY au lieu de pageYOffset
            section.style.backgroundPositionY = `-${offset * 0.6}px`; // Ajuste le multiplicateur pour contrôler la vitesse
        };

        // Assure-toi de lier cet effet au défilement de la fenêtre
        window.addEventListener('scroll', parallaxEffect);

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }, 300); // 300ms de délai, ajuste selon tes besoins
                }
            });
        });

        const fadeLeft = document.querySelectorAll('.fade-in-left');
        fadeLeft.forEach((section) => observer.observe(section));

        const fadeRight = document.querySelectorAll('.fade-in-right');
        fadeRight.forEach((section) => observer.observe(section));

        const fadeIn = document.querySelectorAll('.fade-in');
        fadeIn.forEach((section) => observer.observe(section));

        const fadeUp = document.querySelectorAll('.fade-in-up');
        fadeUp.forEach((section) => observer.observe(section));

        return () => {
            fadeLeft.forEach((section) => observer.unobserve(section));
            fadeRight.forEach((section) => observer.unobserve(section));
            fadeIn.forEach((section) => observer.unobserve(section));
            fadeUp.forEach((section) => observer.unobserve(section));
            window.removeEventListener('scroll', parallaxEffect);

        };
    }, []);
    return (
        <main >
            <section
                className="relative w-full h-screen bg-cover bg-center parallax-section"
                style={{
                    backgroundImage: `url(${headerMacImage})`,
                    backgroundAttachment: 'fixed', // Parallax effect
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                }}
            >
                {/* Calque de couleur sombre */}
                <div className="absolute inset-0 bg-black bg-opacity-70" aria-hidden="true"></div>

                <div className="absolute uppercase font-montserrat inset-0 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-8xl mb-32 fade-in-left">
                        A table
                        <br />
                        <span className='text-4xl'>(j'ai faim)</span>
                    </h1>
                    <a href="#next-section" className="fade-in-right normal-case text-xl font-open-sans inline-block px-8 py-4 border-4 border-white text-white bg-none rounded-2xl transition hover:bg-white hover:text-black" onClick={(e) => {
                        e.preventDefault(); // Empêche le défilement automatique de l'ancre
                        const targetSection = document.getElementById('next-section');
                        const offset = 72; // Décalage de 50px
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = targetSection.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }}>
                        Débutes la liste de course
                    </a>

                    <a href="#next-section" className="absolute bottom-4 hover:translate-y-1 transition duration-300" onClick={(e) => {
                        e.preventDefault(); // Empêche le défilement automatique de l'ancre
                        const targetSection = document.getElementById('next-section');
                        const offset = 72; // Décalage de 50px
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = targetSection.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-300 hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>

                </div>
            </section>

            {/* Nouvelle section avec image background */}
            <section className="relative w-full bg-cover bg-center py-24" id='next-section'
                style={{
                    backgroundImage: `url(${handWritingImage})`,

                }}>
                {/* Calque sombre */}
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>

                {/* Contenu de la section */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white w-8/12 mx-auto">
                    {/* Titre */}
                    <h2 className="text-5xl mb-8 font-oswald tracking-wider border-b-3 fade-in-left">Recettes</h2>

                    {/* Paragraphe avec bg et border-radius */}
                    <p className="bg-black bg-opacity-50 w-10/12 rounded-lg px-8 py-8 mb-12 text-3xl fade-in-right">
                        Rajoutes à ta liste de courses les recettes que tu souhaites !</p>

                    {/* Conteneur pour les encadrés */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-open-sans">
                        {/* Encadré 1 */}
                        <div className="bg-black bg-opacity-50 rounded-lg p-8 text-xl pb-10 fade-in-left">
                            <h3 className="text-3xl  mb-4">Web Design</h3>
                            <p>Création de maquettes qui portent vos couleurs !</p>
                            <button
                                type="button"
                                className="inline-block mt-6 px-6 py-2 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black text-sm "
                            >
                                Add !
                            </button>
                        </div>
                        {/* Encadré 2 */}
                        <div className="bg-black bg-opacity-50 rounded-lg p-8 text-xl pb-10 fade-in">
                            <h3 className="text-3xl  mb-4">Développement</h3>
                            <p>Création de A à Z de sites internet à votre image !</p>
                            <button
                                type="button"
                                className="inline-block mt-6 px-6 py-2 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black text-sm "
                            >
                                Add !
                            </button>
                        </div>
                        {/* Encadré 3 */}
                        <div className="bg-black bg-opacity-50 rounded-lg p-8 text-xl pb-10 fade-in-right">
                            <h3 className="text-3xl  mb-4">Réseaux sociaux</h3>
                            <p>Un accompagnement personnalisé pour vos réseaux sociaux !</p>
                            <button
                                type="button"
                                className="inline-block mt-6 px-6 py-2 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black text-sm "
                            >
                                Add !
                            </button>
                        </div>
                        {/* Encadré 4 */}
                        <div className="bg-black bg-opacity-50 rounded-lg p-8 text-xl pb-10 fade-in-left">
                            <h3 className="text-3xl  mb-4">Référencement</h3>
                            <p>Un référencement efficace pour être vu sur le Web !</p>
                            <button
                                type="button"
                                className="inline-block mt-6 px-6 py-2 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black text-sm "
                            >
                                Add !
                            </button>
                        </div>
                        {/* Encadré 5 */}
                        <div className="bg-black bg-opacity-50 rounded-lg p-8 text-xl pb-10 fade-in">
                            <h3 className="text-3xl  mb-4">Photos / Vidéos</h3>
                            <p>Réalisation de photos et de montages vidéos !</p>
                            <button
                                type="button"
                                className="inline-block mt-6 px-6 py-2 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black text-sm "
                            >
                                Add !
                            </button>
                        </div>
                        {/* Encadré 6 */}
                        <div className="bg-black bg-opacity-50 rounded-lg p-8 text-xl mb pb-10 fade-in-right">
                            <h3 className="text-3xl  mb-4">Formations</h3>
                            <p>Une formation personnalisée pour que vous maitrisiez vos réseaux et votre site !</p>
                            <button
                                type="button"
                                className="inline-block mt-6 px-6 py-2 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black text-sm "
                            >
                                Add !
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Recipes */}
            <RecipeSection />
            {/* Section Contactez-nous */}
            <section className="relative w-full h-auto bg-black bg-center py-24">
                {/* Contenu de la section */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white w-8/12 mx-auto">
                    {/* Titre */}
                    <h2 className="text-5xl mb-16 font-oswald tracking-wider border-b-3 fade-in-left">Contactez-nous</h2>

                    {/* Paragraphe avec bg et border-radius */}
                    <p className="text-xl mb-16 w-8/12 font-open-sans fade-in-right">
                        Vous souhaitez faire appel à nous pour développer votre présence en ligne via un site internet ou le développement de vos réseaux ? N’hésitez pas à nous contacter pour que nous puissions vous rencontrer et échanger sur votre projet !
                    </p>
                    <a href="#contact" className=" fade-in normal-case text-xl font-open-sans inline-block px-8 py-4 border-4 border-white text-white bg-none rounded-2xl transition hover:bg-white hover:text-black">
                        Contactez-nous ici !
                    </a>

                </div>
            </section>
        </main >
    );
}

export default Recipes;
