export const customerEmailTemplate = (data, receiveEmail) => {
  const { name, email, phone, loanType, company } = data;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6; 
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    .container { 
      max-width: 600px; 
      margin: 20px auto; 
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header { 
      background: linear-gradient(135deg, #14b8a6 0%, #2563eb 100%); 
      color: white; 
      padding: 40px 30px; 
      text-align: center;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 24px;
      font-weight: 600;
    }
    .header p {
      margin: 0;
      opacity: 0.9;
      font-size: 14px;
    }
    .content { 
      padding: 30px;
    }
    .message { 
      background: #f9fafb; 
      padding: 24px; 
      border-radius: 8px; 
      margin: 24px 0;
      border-left: 4px solid #14b8a6;
    }
    .message h3 {
      margin: 20px 0 12px 0;
      color: #1f2937;
      font-size: 16px;
      font-weight: 600;
    }
    .message ul {
      margin: 12px 0;
      padding-left: 20px;
    }
    .message li {
      margin: 8px 0;
      color: #4b5563;
    }
    .message ol {
      margin: 12px 0;
      padding-left: 20px;
    }
    .message strong {
      color: #1f2937;
    }
    .footer { 
      background: #f9fafb;
      padding: 20px 30px;
      text-align: center; 
      color: #6b7280; 
      font-size: 13px;
      border-top: 1px solid #e5e7eb;
    }
    .contact-link {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }
    .contact-link:hover {
      text-decoration: underline;
    }
    .success-badge {
      display: inline-block;
      background: #dcfce7;
      color: #166534;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      margin-top: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Finntech</h1>
      <p>We've received your consultation request</p>
      <div class="success-badge">Request Confirmed</div>
    </div>
    <div class="content">
      <p style="font-size: 15px; color: #4b5563; margin-bottom: 20px;">Dear ${name},</p>
      
      <div class="message">
        <p style="margin-top: 0;"><strong>Your ${loanType} consultation request has been received successfully.</strong></p>
        <p>Our team of financial experts will review your application and contact you within 24 hours to discuss your financing needs.</p>
        
        <h3>Your Submission Details</h3>
        <ul>
          <li><strong>Loan Type:</strong> ${loanType}</li>
          <li><strong>Contact Email:</strong> ${email}</li>
          <li><strong>Contact Phone:</strong> ${phone}</li>
          ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
        </ul>
        
        <h3>What Happens Next?</h3>
        <ol>
          <li>Our team will review your requirements</li>
          <li>We'll contact you to discuss available options</li>
          <li>Get personalized loan solutions tailored to your needs</li>
        </ol>
      </div>
      
      <p style="font-size: 14px; color: #4b5563;">If you have any immediate questions, feel free to reach out to us at <a href="mailto:${receiveEmail}" class="contact-link">${receiveEmail}</a>.</p>
      
      <p style="margin-top: 24px; font-size: 14px; color: #4b5563;">
        Best regards,<br>
        <strong style="color: #1f2937;">Finntech Team</strong>
      </p>
    </div>
    <div class="footer">
      <p>This is an automated confirmation email.</p>
      <p style="margin-top: 8px; font-size: 12px; color: #9ca3af;">&copy; ${new Date().getFullYear()} Finntech. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
};
