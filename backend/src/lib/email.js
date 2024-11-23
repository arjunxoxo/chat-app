import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create a transporter using SMTP settings
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // App password for Gmail or API key for other services
  },
});

const sendEmail = async (to, name) => {
  const mailOptions = {
    from: `"MOODY" <${process.env.EMAIL_USER}>`, // Sender address
    to, // Recipient address
    subject: "Welcome to Our App!", // Subject line
    text: `Hello ${name},\n\nWelcome to our app! We're excited to have you onboard.\n\nThank you for registering.`,
    html: `<h1>Hello ${name}!</h1><p>Welcome to our app! We're excited to have you onboard.</p><p>Thank you for registering.</p>`, // HTML content
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
