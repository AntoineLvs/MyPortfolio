const axios = require('axios');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phone, email, address, service, description } = req.body;

        const emailData = {
            api_key: process.env.SMTP2GO_API_KEY,
            to: ['test@example.com'], // Remplace par le vrai destinataire
            sender: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
            subject: `Nouveau projet de ${name}`,
            text_body: `Détails du projet : Nom: ${name}, Téléphone: ${phone}, Email: ${email}, etc.`,
        };

        try {
            const response = await axios.post('https://api.smtp2go.com/v3/email/send', emailData);
            if (response.data.success) {
                res.status(200).json({ success: true, message: 'Email envoyé avec succès !' });
            } else {
                res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'email' });
            }
        } catch (error) {
            console.error('Erreur:', error);
            res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
