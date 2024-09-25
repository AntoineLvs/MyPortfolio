import React, { useState } from 'react';

const ContactFormSection = ({ typingMacImage }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        service: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Envoie les données du formulaire au serveur Express
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert('Email envoyé avec succès');
            } else {
                alert('Erreur lors de l\'envoi de l\'email');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire', error);
        }
    };

    return (
        <section
            id="contact"
            className="relative w-full bg-cover bg-center py-24"
            style={{
                backgroundImage: `url(${typingMacImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Calque sombre */}
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            {/* Contenu de la section */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white w-10/12 mx-auto">
                {/* Titre */}
                <h2 className="text-4xl mb-12 font-oswald tracking-wider">Commencer votre projet</h2>

                {/* Formulaire */}
                <form
                    onSubmit={handleSubmit}
                    className="relative z-10 w-full lg:w-8/12 bg-transparent"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nom*"
                            className="p-4 rounded-lg border border-gray-400 w-full bg-transparent text-orange-600 placeholder-white"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="N° Téléphone"
                            className="p-4 rounded-lg border border-gray-400 w-full bg-transparent text-orange-600 placeholder-white"
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            className="p-4 rounded-lg border border-gray-400 w-full bg-transparent text-orange-600 placeholder-white"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Adresse"
                            className="p-4 rounded-lg border border-gray-400 w-full bg-transparent text-orange-600 placeholder-white"
                        />
                    </div>
                    <div className="mb-8">
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`p-4 rounded-lg border border-gray-400 w-full bg-transparent text-white placeholder-white ${formData.service !== '' ? 'text-orange-600' : 'text-white'
                                }`}
                            required
                        >
                            <option value="" disabled>
                                Sélectionnez le service souhaité*
                            </option>
                            <option value="Demande pour : Site pré-maquetté">Site pré-maquetté</option>
                            <option value="Demande pour : Site personnalisé">Site personnalisé</option>
                            <option value="Demande pour : Animation des réseaux sociaux">
                                Animation des réseaux sociaux
                            </option>
                            <option value="Demande pour : Autres">Autres</option>
                        </select>
                    </div>

                    <div className="mb-8">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Décrivez votre projet*"
                            className="p-4 rounded-lg border border-gray-400 w-full bg-transparent text-orange-600 placeholder-white h-32"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="inline-block px-8 py-4 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black font-semibold"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactFormSection;
