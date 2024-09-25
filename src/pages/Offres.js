// src/pages/Offres.js
import React, { useEffect, useRef } from 'react';
import headerMacImage from '../assets/header-mac-white.jpg'; // Remplace par ton image de fond pour la nouvelle section
import pierreAntoineImage from '../assets/pierre_antoine.png'; // Remplace par ton image pour la section
import handWritingImage from '../assets/hand-writing.jpg';
import macIphoneImage from '../assets/mac-iphone.jpg';

function Offres() {
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
                        Notre offre
                        <br />
                        <span className='text-4xl'>au service de votre communication</span>
                    </h1>
                    <a href="#contact" className="fade-in-right normal-case text-xl font-open-sans inline-block px-8 py-4 border-4 border-white text-white bg-none rounded-2xl transition hover:bg-white hover:text-black">
                        Débutez votre projet
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

            <section className="flex flex-col md:flex-row w-full bg-white" id="next-section" >
                {/* Image */}
                <div className="w-3/4 md:w-4/12 flex justify-center">
                    <img src={pierreAntoineImage} alt="Description de l'image" className="w-10/12 h-full object-cover hover:scale-105 fade-in" />
                </div>
                {/* Texte */}
                <div className="w-full font-open-sans md:w-8/12 px-8 md:px-16 py-16 text-xl fade-in flex-row justify-center">
                    <h2 className="text-3xl font-semibold mb-12">Car nous savons que chaque projet est unique, notre offre s’adapte à vous</h2>
                    <p className="mb-10">
                        Ainsi, chez Baroque Web, nous vous proposons deux types de services, que vous êtes libres d’associer en fonction de vos besoins :
                    </p>
                    <ul className="list-disc pl-5 mb-10">
                        <li className="mb-2">La création, le développement, et la maintenance d’un site internet, qui vous servira de vitrine digitale pour vos futurs clients qui cherchent à mieux vous connaître.</li>
                        <li className="mb-2">L’animation de vos réseaux sociaux, afin de vous faire connaître du grand public, de toucher un potentiel nouveau public, et de rester en contact avec celui déjà établi.</li>
                    </ul>
                    <p>
                        En combinant ces deux services, nous vous permettons de développer grandement votre présence en ligne, et de mieux vous faire connaître.                    </p>
                    <p className="mt-16 mb-4 text-4xl font-just-me flex justify-end">Pierre & Antoine</p>
                    <p className='flex justify-end'>Fondateurs de Baroque Web</p>
                </div>
            </section>
            {/* Nouvelle section avec image background */}
            <section className="relative w-full bg-cover bg-center py-24"
                style={{
                    backgroundImage: `url(${macIphoneImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                }}>
                {/* Calque sombre */}
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>

                {/* Contenu de la section */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white w-8/12 mx-auto">
                    {/* Titre */}
                    <h2 className="text-5xl mb-32 font-oswald tracking-wider border-b-3 fade-in-left">Des solutions de qualité</h2>

                    {/* Conteneur pour les encadrés */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-open-sans">
                        {/* Encadré 1 */}
                        <div className="bg-black bg-opacity-70 rounded-lg p-8 text-xl pb-10 fade-in-left mt-10 pb-32 custom-shadow hover:scale-105">
                            <h3 className="text-3xl mb-10">Site pré-maquetté</h3>
                            <p>Choisissez parmi une gamme de maquettes de sites réalisées par nos soins et personnalisez-les selon vos envies</p>
                            <a href="#contact" className="mt-10 fade-in normal-case text-base font-semibold font-open-sans inline-block px-6 py-2 border-2 border-white text-white bg-none rounded-2xl transition ease-linear	 hover:bg-white hover:text-black">
                                Je choisis !
                            </a>
                        </div>

                        <div className="bg-black bg-opacity-70 rounded-lg p-8 text-xl pb-10 fade-in mb-10 pb-32 custom-shadow hover:scale-105">
                            <h3 className="text-3xl mb-10">Site personnalisé</h3>
                            <p>Avec notre expertise, réalisez un site internet entièrement à votre image, qui vous correspond et transmet votre identité</p>
                            <a href="#contact" className="mt-10 fade-in normal-case text-base font-semibold font-open-sans inline-block px-6 py-2 border-2 border-white text-white bg-none rounded-2xl transition ease-linear	 hover:bg-white hover:text-black">
                                Je choisis !
                            </a>
                        </div>

                        <div className="bg-black bg-opacity-70 rounded-lg p-8 text-xl pb-10 fade-in-right mt-10 pb-24 custom-shadow hover:scale-105">
                            <h3 className="text-3xl mb-10">Animation des réseaux sociaux</h3>
                            <p>Développez et dynamisez votre présence en ligne sur les réseaux sociaux à l’aide de nos conseils et d’outils de mesure de performances adaptés</p>
                            <a href="#contact" className="mt-10 fade-in normal-case text-base font-semibold font-open-sans inline-block px-6 py-2 border-2 border-white text-white bg-none rounded-2xl transition ease-linear	 hover:bg-white hover:text-black">
                                Je choisis !
                            </a>
                        </div>


                    </div>
                </div>
            </section>
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

export default Offres;
