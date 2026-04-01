# Finntech Email Backend (Vercel Serverless)

This is a serverless email backend using Nodemailer with GoDaddy SMTP.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Deploy to Vercel:
```bash
vercel
```

3. Add environment variables in Vercel Dashboard:
   - `EMAIL_HOST`: smtp.secureserver.net
   - `EMAIL_PORT`: 465
   - `EMAIL_USER`: avinash@finntechbs.com
   - `EMAIL_PASS`: Your GoDaddy email password
   - `RECEIVE_EMAIL`: sunny@finntechbs.com,avinash@finntechbs.com
   - `FROM_NAME`: Finntech Loan Consultation
   - `FRONTEND_URL`: https://finntech-beta.vercel.app

4. Update your frontend to use the new Vercel backend URL.

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/send-consultation` - Send consultation email
