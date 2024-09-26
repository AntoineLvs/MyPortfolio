const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, phone, email, address, service, description } = req.body;

    // Structure des données à envoyer à l'API de SMTP2GO
    const emailData = {
        api_key: process.env.SMTP2GO_API_KEY, // Clé API SMTP2GO
        to: ['test@example.com'], // Destinataire (ajuste cette valeur selon ton besoin)
        sender: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`, // Expéditeur
        subject: `Nouveau projet de ${name}`, // Sujet de l'email
        text_body: `Détails du projet :
                    Nom: ${name}
                    Téléphone: ${phone}
                    Email: ${email}
                    Adresse: ${address}
                    Service demandé: ${service}
                    Description du projet: ${description}`,
    };

    try {
        // Envoi de la requête POST à l'API de SMTP2GO
        const response = await axios.post('https://api.smtp2go.com/v3/email/send', emailData);

        if (response.data.success) {
            return res.status(200).json({ success: true, message: 'Email envoyé avec succès !' });
        } else {
            return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'email' });
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'email' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
