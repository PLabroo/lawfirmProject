// controllers/contactController.js

const nodemailer = require('nodemailer');

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    secure: true, // Use TLS
    port: 465,
    debug: true, // Enable debug output
    logger: true // 
});

// Contact form submission handler
exports.sendContactForm = async (req, res) => {
    const { name, email,phone, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your email address to receive messages
        subject: subject,
        phone: phone,
        text: `You received a message from 
            Name: ${name} 
            Email: ${email}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error sending message.' });
    }
};