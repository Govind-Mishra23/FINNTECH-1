import nodemailer from 'nodemailer';
import { businessEmailTemplate } from '../templates/businessEmail.js';
import { customerEmailTemplate } from '../templates/customerEmail.js';

// Create transporter with GoDaddy SMTP
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.secureserver.net',
        port: parseInt(process.env.EMAIL_PORT) || 465,
        secure: true, // Use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    try {
        const { name, email, phone, loanType, company, message, applicantType } = req.body;

        // Validation
        if (!name || !email || !phone || !loanType) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all required fields'
            });
        }

        const emailData = { name, email, phone, loanType, company, message, applicantType };

        // Generate email HTML from templates
        const businessEmailHtml = businessEmailTemplate(emailData);
        const customerEmailHtml = customerEmailTemplate(emailData, process.env.RECEIVE_EMAIL);

        // Get recipient emails
        const receiveEmails = process.env.RECEIVE_EMAIL.split(',').map(e => e.trim());

        // Create transporter
        const transporter = createTransporter();

        // Send both emails in parallel
        const emailPromises = [
            // Send email to business
            transporter.sendMail({
                from: `${process.env.FROM_NAME} <${process.env.EMAIL_USER}>`,
                to: receiveEmails.join(', '),
                replyTo: email,
                subject: `New ${loanType} Consultation Request from ${name}`,
                html: businessEmailHtml
            }),
            // Send confirmation email to customer
            transporter.sendMail({
                from: `${process.env.FROM_NAME} <${process.env.EMAIL_USER}>`,
                to: email,
                subject: 'Thank you for your consultation request - Finntech',
                html: customerEmailHtml
            })
        ];

        // Wait for both emails to send
        await Promise.all(emailPromises);

        console.log(`✅ Email sent successfully for ${name} (${email})`);

        res.status(200).json({
            success: true,
            message: 'Consultation request submitted successfully! Check your email for confirmation.'
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send consultation request. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
