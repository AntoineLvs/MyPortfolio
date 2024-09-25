// src/pages/Portfolio.js
import React, { useEffect, useRef } from 'react';
import headerMacImage from '../assets/header-mac-white.jpg';
import pierreAntoineImage from '../assets/pierre_antoine.png';
import handVineImage from '../assets/hand-vine.jpg';
import vignoblePailleImage from '../assets/vignoble-paille.png';

function Portfolio() {
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
                        Nos réalisations
                        <br />
                        <span className='text-4xl'>au service de votre communication</span>
                    </h1>
                    <a href="#contact" className="fade-in-right normal-case text-xl font-open-sans inline-block px-8 py-4 border-4 border-white text-white bg-none rounded-2xl transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
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

                {/* Texte */}
                <div className="w-full font-open-sans md:w-8/12 px-8 md:px-16 py-16 text-xl fade-in flex-row justify-center">
                    <h2 className="text-3xl font-semibold mb-12">Car chaque projet est unique et raconte une histoire</h2>
                    <p className="mb-10">
                        Chez Baroque Web, nous sommes fiers de réaliser vos projets, et d’avoir un impact durable sur votre communication :
                    </p>
                    <ul className="list-disc pl-5 mb-10">
                        <li className="mb-2">Etant confiants en notre capacité à vous aider, nous vous présentons ici nos réalisations, qui ont aidé des personnes à redynamiser leur communication.</li>
                        <li className="mb-2">Nous vous présentons ainsi chaque histoire qui se cache à travers chaque projet, ainsi que des témoignages nous permettant de vous démontrer notre efficacité.</li>
                    </ul>
                    <p>
                        Alors, si vous aussi vous souhaitez, comme les personnes que nous avons pu aider, développer et dynamiser votre présence en ligne, confiez nous votre projet !</p>
                    <p className="mt-16 mb-4 text-4xl font-just-me flex justify-end">Pierre & Antoine</p>
                    <p className='flex justify-end'>Fondateurs de Baroque Web</p>
                </div>
                {/* Image */}
                <div className="w-3/4 md:w-4/12 flex justify-center">
                    <img src={pierreAntoineImage} alt="Description de l'image" className="w-10/12 h-full object-cover hover:scale-105 fade-in" />
                </div>
            </section>
            {/* Nouvelle section avec image background */}
            <section
                className="relative w-full bg-cover bg-center py-24"
                style={{
                    backgroundImage: `url(${handVineImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Calque sombre */}
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>

                {/* Contenu de la section */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white w-10/12 mx-auto">
                    {/* Titre */}
                    <h2 className="text-5xl mb-16 font-oswald tracking-wider border-b-3 fade-in-left">Notre premier projet : Les Vignobles PAILLE</h2>
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center text-white w-8/12 mx-auto space-x-16">
                        {/* Image vignoble */}
                        <div className="relative lg:w-8/12 w-full mb-8 lg:mb-0 fade-in-left">
                            <img
                                src={vignoblePailleImage}
                                alt="Vignobles Paille"
                                className="w-full rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                        </div>

                        {/* Texte de la section */}
                        <div className="lg:w-6/12 w-full text-center font-open-sans lg:text-left">
                            <p className="text-lg  mb-12 fade-in-right">
                                Cécile et Julien nous ont contacté en Mai 2023 pour réaliser leur site internet.
                                Deux mois plus tard, le site des Vignobles PAILLE voyait jour, et était prêt à dynamiser leur présence en ligne.
                            </p>
                            <blockquote className="italic text-2xl mb-12 border-l-4 pl-8 fade-in">
                                "Grâce au site internet, nous avons été contacté par un importateur américain, que nous n’aurions jamais pu atteindre sans ce site et sa traduction en anglais"
                            </blockquote>
                            <div class="flex justify-center">
                                <a href="#projet" className="fade-in inline-block px-6 py-3 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black font-semibold">
                                    Découvrir leur projet
                                </a>
                            </div>
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

export default Portfolio;
