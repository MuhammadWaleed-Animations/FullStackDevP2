const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Favicon request handler
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received request:', { name, email, message });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shahzebmubashar7@gmail.com', 
      pass: 'nyjw labf ueko jnnq',  
    },
  });

  const mailOptions = {
    from: email,
    to: 'shahzebmubashar7@gmail.com',
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
