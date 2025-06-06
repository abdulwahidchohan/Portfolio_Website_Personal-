# EmailJS Setup Guide

To enable email functionality in the contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

\`\`\`
Subject: New Contact Form: {{project_type}} Project from {{from_name}}

Hi Abdul,

You have received a new contact form submission:

Contact Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}

Project Details:
- Project Type: {{project_type}}
- Message: {{message}}

Reply to: {{reply_to}}

Best regards,
Your Portfolio Website
\`\`\`

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

## 5. Update Configuration
In `components/contact-form.tsx`, update the EMAILJS_CONFIG object:

\`\`\`javascript
const EMAILJS_CONFIG = {
  serviceId: "your_actual_service_id",     // Replace with your Service ID
  templateId: "your_actual_template_id",   // Replace with your Template ID
  publicKey: "your_actual_public_key",     // Replace with your Public Key
}
\`\`\`

## 6. Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message

## Troubleshooting
- Make sure all IDs and keys are correct
- Check EmailJS dashboard for any error logs
- Verify your email service is properly connected
- Test with a simple template first

## Security Notes
- Public key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose
- Never expose private keys in frontend code
\`\`\`

Let's also create a simple EmailJS test component:
