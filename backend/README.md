# Finntech Backend - Email Setup Guide

## 🚀 Quick Setup Instructions

### Step 1: Create .env file

Copy `.env.example` to `.env` in the backend directory:

```bash
cd backend
cp .env.example .env
```

### Step 2: Configure GoDaddy Email Settings

Edit the `.env` file with your GoDaddy Professional Email credentials:

```env
# GoDaddy Professional Email Configuration
EMAIL_HOST=smtp.secureserver.net
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=sunny@finntechbs.com
EMAIL_PASS=YOUR_ACTUAL_PASSWORD_HERE

# Where you want to receive consultation requests
RECEIVE_EMAIL=sunny@finntechbs.com
FROM_NAME=Finntech Loan Consultation

# Server settings
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### Step 3: Get Your GoDaddy Email Password

#### Option A: Using Your Email Account Password

1. Log in to GoDaddy
2. Go to **Email & Office Dashboard**
3. Use your email account password (the one you use to log in to webmail)

#### Option B: Create an App-Specific Password (Recommended)

1. Log in to your GoDaddy account
2. Go to **My Products** → **Email & Office**
3. Click on **Manage** next to your email address
4. Go to **Settings** → **Security**
5. Look for **App Passwords** or **Third-party Access**
6. Generate a new app password
7. Copy this password and paste it in the `.env` file

### Step 4: GoDaddy SMTP Settings (Already Configured)

The following settings are already in your `.env.example`:

- **SMTP Host**: smtp.secureserver.net
- **Port**: 465 (SSL/TLS)
- **Secure**: true
- **Authentication**: Required

### Step 5: Install Dependencies

```bash
cd backend
npm install
```

### Step 6: Start the Backend Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

### Step 7: Start the Frontend

In a new terminal:

```bash
cd frontend
npm run dev
```

## 📧 How It Works

1. **User submits form** → Frontend sends data to `http://localhost:5000/api/send-consultation`
2. **Backend receives data** → Validates and processes the form
3. **Two emails are sent**:
   - **To you** (`sunny@finntechbs.com`): Notification with all customer details
   - **To customer**: Confirmation email thanking them

## 🔒 GoDaddy Professional Email Features Used

- **From Address**: sunny@finntechbs.com
- **Display Name**: Finntech Loan Consultation
- **SMTP Authentication**: Your email credentials
- **SSL/TLS Encryption**: Secure connection on port 465

## 🧪 Testing

1. Fill out the form on your website
2. Check your inbox at `sunny@finntechbs.com` for the consultation request
3. The customer should also receive a confirmation email

## ⚠️ Troubleshooting

### If emails aren't sending:

1. **Check GoDaddy Email Settings**:

   - Verify your email password is correct
   - Ensure SMTP is enabled in your GoDaddy account

2. **Enable Less Secure Apps** (if required):

   - Some email providers require enabling "less secure apps"
   - Check GoDaddy's security settings

3. **Check Server Logs**:

   - Look for errors in the terminal where backend is running
   - It will show "✅ Email server is ready" if configured correctly

4. **Firewall/Port Issues**:
   - Ensure port 465 is not blocked
   - Try port 587 with TLS if 465 doesn't work

### If you see authentication errors:

```env
# Try alternative port configuration:
EMAIL_PORT=587
EMAIL_SECURE=false
```

## 📁 File Structure

```
backend/
├── server.js           # Main server file
├── package.json        # Dependencies
├── .env               # Your configuration (DO NOT COMMIT)
├── .env.example       # Example configuration
└── README.md          # This file
```

## 🌐 Production Deployment

When deploying to production:

1. Update `FRONTEND_URL` in `.env` to your actual domain
2. Update email settings if using a different email provider
3. Use environment variables on your hosting platform
4. Never commit `.env` file to Git

## 📞 Support

If you encounter any issues:

1. Check the server console for error messages
2. Verify your GoDaddy email credentials
3. Test email login at webmail.secureserver.net
4. Contact GoDaddy support if SMTP access issues persist
