import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendConsultationEmail } from './controllers/emailController.js';
import { apiDocsTemplate } from './templates/apiDocs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Allow only YOUR Vercel deployments (finntech-*.vercel.app)
    if (origin.includes('finntech') && origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }

    // Allow listed origins from env
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // For development only - allow localhost
    if (process.env.NODE_ENV !== 'production' && origin.includes('localhost')) {
      return callback(null, true);
    }

    callback(null, false);
  },
  credentials: true
}));
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send(apiDocsTemplate());
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', emailService: 'Resend' });
});

// Email submission endpoint
app.post('/api/send-consultation', sendConsultationEmail);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email service: Resend API`);
});
