import { Resend } from 'resend';
import { businessEmailTemplate } from '../templates/businessEmail.js';
import { customerEmailTemplate } from '../templates/customerEmail.js';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConsultationEmail = async (req, res) => {
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

    // Send both emails in parallel for faster response
    const emailPromises = [
      // Send email to business
      resend.emails.send({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: receiveEmails,
        replyTo: email,
        subject: `New ${loanType} Consultation Request from ${name}`,
        html: businessEmailHtml
      }),
      // Send confirmation email to customer
      resend.emails.send({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: [email],
        subject: 'Thank you for your consultation request - Finntech',
        html: customerEmailHtml
      })
    ];

    // Wait for both emails to send in parallel
    const results = await Promise.all(emailPromises);

    // Check for errors
    const errors = results.filter(r => r.error);
    if (errors.length > 0) {
      console.error('❌ Email errors:', errors);
      throw new Error('Failed to send some emails');
    }

    console.log(`✅ Email sent successfully for ${name} (${email})`);

    res.json({
      success: true,
      message: 'Consultation request submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send consultation request. Please try again.'
    });
  }
};
