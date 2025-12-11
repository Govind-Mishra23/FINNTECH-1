export const businessEmailTemplate = (data) => {
  const { name, email, phone, loanType, company, message, applicantType } = data;
  
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
    .field { 
      margin-bottom: 24px;
      border-left: 3px solid #14b8a6;
      padding-left: 16px;
    }
    .label { 
      font-weight: 600;
      color: #14b8a6;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      display: block;
    }
    .value { 
      color: #1f2937;
      font-size: 15px;
      word-break: break-word;
    }
    .value a {
      color: #2563eb;
      text-decoration: none;
    }
    .value a:hover {
      text-decoration: underline;
    }
    .footer { 
      background: #f9fafb;
      padding: 20px 30px;
      text-align: center; 
      color: #6b7280; 
      font-size: 13px;
      border-top: 1px solid #e5e7eb;
    }
    .badge {
      display: inline-block;
      background: #f0fdf4;
      color: #16a34a;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${loanType} Consultation Request</h1>
      <p>A new ${applicantType === 'company' ? 'company' : 'individual'} has requested consultation</p>
      <div class="badge">${loanType}</div>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Applicant Name</span>
        <div class="value">${name}</div>
      </div>
      
      ${company ? `
      <div class="field">
        <span class="label">Company Name</span>
        <div class="value">${company}</div>
      </div>
      ` : ''}
      
      <div class="field">
        <span class="label">Email Address</span>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      
      <div class="field">
        <span class="label">Phone Number</span>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      
      <div class="field">
        <span class="label">Loan Type</span>
        <div class="value">${loanType}</div>
      </div>
      
      ${message ? `
      <div class="field">
        <span class="label">Additional Information</span>
        <div class="value">${message}</div>
      </div>
      ` : ''}
      
      <div class="field">
        <span class="label">Received At</span>
        <div class="value">${new Date().toLocaleString('en-US', { 
          dateStyle: 'full', 
          timeStyle: 'short' 
        })}</div>
      </div>
    </div>
    <div class="footer">
      <p>This is an automated notification from your Finntech website.</p>
      <p style="margin-top: 8px; font-size: 12px; color: #9ca3af;">Please respond within 24 hours for best customer experience.</p>
    </div>
  </div>
</body>
</html>
  `;
};
