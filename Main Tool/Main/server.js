const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your HTML file
app.use(express.static(__dirname));

app.post('/send-invite', (req, res) => {
  const { email, message } = req.body;

  // Replace these details with your actual email and SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'TeamTackerTriumphs@gmail.com',
      pass: '724724teamtracker',
    },
  });

  const mailOptions = {
    from: 'TeamTackerTriumphs@gmail.com',
    to: email,
    subject: 'Invitation to TeamTracker',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending invite:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Invite sent successfully:', info.response);
    res.status(200).send('Invite sent successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
