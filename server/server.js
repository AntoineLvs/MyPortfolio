const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, phone, email, address, service, description } = req.body;

    // Configuration du transporteur SMTP avec Mailtrap
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false, // Utilise true pour SSL, mais avec Mailtrap (port 2525), c'est false
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false, // Permet de contourner les certificats TLS non signés
        },
    });

    // Configuration de l'email
    const mailOptions = {
        from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`, // Adresse de l'expéditeur
        to: 'test@example.com', // Adresse email de destination (tu peux la définir comme tu veux)
        subject: `Nouveau projet de ${name}`, // Sujet de l'email
        text: `Détails du projet : 
               Nom: ${name}
               Téléphone: ${phone}
               Email: ${email}
               Adresse: ${address}
               Service demandé: ${service}
               Description du projet: ${description}`,
    };

    // Envoi de l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erreur lors de l\'envoi de l\'email :', error);
            return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
        }
        console.log('Email envoyé : ' + info.response);
        res.status(200).json({ message: 'Email envoyé avec succès !' });
    });

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
