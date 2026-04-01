# 📧 GoDaddy Professional Email Setup - Step-by-Step Guide

Based on your GoDaddy screenshot, here's exactly what you need to do:

## 🔑 Step 1: Get Your Email Password

You have two email accounts visible in your GoDaddy:

- **sunny@finntechbs.com** (Primary - Professional Email Pro Light)
- **avinash@finntechbs.com** (Secondary - Professional Email Pro Light)

### How to get your password:

#### Method 1: If you remember your email password

Just use the password you created when setting up the email account.

#### Method 2: Reset your password

1. In GoDaddy, click the **three dots menu (⋮)** next to "Sign In" for `sunny@finntechbs.com`
2. Select **"Manage Email Settings"** or **"Reset Password"**
3. Follow the prompts to reset your password
4. **Save this password** - you'll need it for the `.env` file

#### Method 3: Sign in to check if you know the password

1. Click **"Sign In"** button next to `sunny@finntechbs.com`
2. It will open GoDaddy Webmail
3. Try logging in with your password
4. If successful, use this same password in your `.env` file

## 🔧 Step 2: Configure Your Backend `.env` File

Open `backend/.env` and update with your actual password:

```env
EMAIL_HOST=smtp.secureserver.net
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=sunny@finntechbs.com
EMAIL_PASS=PUT_YOUR_ACTUAL_PASSWORD_HERE  ← Replace this!

RECEIVE_EMAIL=sunny@finntechbs.com
FROM_NAME=Finntech Loan Consultation

PORT=5000
FRONTEND_URL=http://localhost:5173
```

**⚠️ IMPORTANT**: Replace `PUT_YOUR_ACTUAL_PASSWORD_HERE` with your actual email password!

## 📨 Step 3: Verify SMTP is Enabled

GoDaddy Professional Email has SMTP enabled by default, but let's verify:

1. Go to GoDaddy → **Email & Office** → **Manage**
2. Click on **Settings** for `sunny@finntechbs.com`
3. Look for **SMTP Settings** or **Email Client Setup**
4. Verify these settings:
   - **Incoming Server (IMAP)**: imap.secureserver.net (Port 993)
   - **Outgoing Server (SMTP)**: smtp.secureserver.net (Port 465 or 587)

## 🚀 Step 4: Install and Run Backend

Open terminal and run:

```bash
# Navigate to backend folder
cd /Users/govindmishra/Coding/Finntech/backend

# Install dependencies
npm install

# Start the server
npm start
```

You should see:

```
🚀 Server is running on http://localhost:5000
✅ Email server is ready to send messages
📧 Email configured for: sunny@finntechbs.com
```

## 🎨 Step 5: Run Frontend

In a **new terminal window**:

```bash
# Navigate to frontend folder
cd /Users/govindmishra/Coding/Finntech/frontend

# Start development server
npm run dev
```

## 🧪 Step 6: Test Your Form

1. Open your website (usually `http://localhost:5173`)
2. Fill out the consultation form
3. Click Submit
4. **Check TWO places**:
   - Your inbox at `sunny@finntechbs.com` (you should receive a notification)
   - Customer's email (they should receive a confirmation)

## 📧 What Happens When Form is Submitted?

1. **Customer fills form** → Clicks "Submit Application"
2. **Backend receives data** → Validates and processes
3. **Two emails sent**:

   **Email #1 - To You (sunny@finntechbs.com)**:

   - Subject: "New [Loan Type] Consultation Request from [Customer Name]"
   - Contains: All customer details, loan type, message, timestamp

   **Email #2 - To Customer**:

   - Subject: "Thank you for your consultation request - Finntech"
   - Contains: Confirmation message, next steps, your contact info

## 🔍 How to Check Your Emails

### Option 1: Webmail (Browser)

1. Go to https://login.secureserver.net
2. Enter: `sunny@finntechbs.com`
3. Enter your password
4. Check inbox for new consultation requests

### Option 2: Email Client (Outlook, Apple Mail, etc.)

Configure with these settings:

- **Email**: sunny@finntechbs.com
- **Password**: Your email password
- **IMAP Server**: imap.secureserver.net (Port 993, SSL)
- **SMTP Server**: smtp.secureserver.net (Port 465, SSL)

## ❌ Troubleshooting

### Error: "Invalid login: 535 Authentication failed"

**Solution**: Your password is incorrect

- Go to GoDaddy and reset your password for `sunny@finntechbs.com`
- Update the password in `backend/.env`
- Restart the backend server

### Error: "Connection timeout"

**Solution**: Port might be blocked
Try alternative SMTP settings in `.env`:

```env
EMAIL_PORT=587
EMAIL_SECURE=false
```

### Error: "CORS error" in browser

**Solution**: Make sure backend is running on port 5000

- Check terminal where you ran `npm start`
- Frontend must be on port 5173

### No email received

**Check**:

1. Backend console - look for "✅ Email sent successfully"
2. Spam/Junk folder in `sunny@finntechbs.com`
3. GoDaddy email quota - ensure you haven't exceeded limits

## 🎯 Production Deployment (When Ready)

When you deploy to a live server:

1. **Update environment variables**:

   ```env
   FRONTEND_URL=https://your-actual-domain.com
   ```

2. **Use environment variables** on your hosting platform:

   - Vercel, Netlify, etc. have environment variable sections
   - Add all the variables from `.env` there
   - **NEVER** commit `.env` to Git

3. **Backend deployment**:
   - Deploy backend to services like Render, Railway, or Vercel
   - Update frontend API URL to point to production backend

## 📞 Need Help?

1. **Backend not starting**: Check if Node.js is installed (`node --version`)
2. **Can't install packages**: Try `npm cache clean --force` then `npm install`
3. **Email not working**: Test login at webmail.secureserver.net first
4. **GoDaddy issues**: Contact GoDaddy support or check their email documentation

## ✅ Verification Checklist

- [ ] GoDaddy email password retrieved/reset
- [ ] `backend/.env` file updated with correct password
- [ ] Backend dependencies installed (`npm install`)
- [ ] Backend server running (shows "Email server is ready")
- [ ] Frontend running on port 5173
- [ ] Test form submission
- [ ] Email received at sunny@finntechbs.com
- [ ] Customer confirmation email sent

---

**🎉 Once all checkboxes are complete, your form is fully functional!**
