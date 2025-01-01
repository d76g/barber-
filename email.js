const nodemailer = require("nodemailer");

// Step 1: Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cut10561@gmail.com", // Replace with your Gmail address
    pass: "uyfqesehbyifnyeo", // Replace with your Google App Password
  },
});

module.exports = transporter;
