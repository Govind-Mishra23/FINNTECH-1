// Health check endpoint
export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    res.status(200).json({
        status: 'OK',
        message: 'Finntech Email Server is running',
        emailService: 'Nodemailer + GoDaddy SMTP',
        timestamp: new Date().toISOString()
    });
}
