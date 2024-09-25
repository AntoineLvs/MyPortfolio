// src/pages/Contact.js
import React, { useEffect, useRef } from 'react';
import headerMacImage from '../assets/header-mac-white.jpg';
import pierreAntoineImage from '../assets/pierre_antoine.png';
import handVineImage from '../assets/hand-vine.jpg';
import vignoblePailleImage from '../assets/vignoble-paille.png';
import typingMacImage from '../assets/typing-mac.jpg';
import ContactFormSection from '../components/ContactForm'; // Importation du composant

function Contact() {
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
                        Nous contacter
                        <br />
                        <span className='text-4xl'>au service de votre communication</span>
                    </h1>
                    <a onClick={(e) => {
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
                    }} className=" normal-case text-xl font-open-sans inline-block px-8 py-4 border-4 border-white text-white bg-none rounded-2xl transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
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
            {/* Nouvelle section avec image background */}
            <div id="next-section" >
                {/* Autres sections ou composants éventuels */}

                <ContactFormSection typingMacImage={typingMacImage} />

                {/* Autres sections ou composants éventuels */}
            </div>
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
                    <a href="#contact" className="normal-case text-xl font-open-sans inline-block px-8 py-4 border-4 border-white text-white bg-none rounded-2xl transition hover:bg-white hover:text-black">
                        Contactez-nous ici !
                    </a>

                </div>
            </section>
        </main >
    );
}

export default Contact;
