const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());


app.get("/",(req,res)=>{
   res.rend("Hell world")
}
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vinaykumardag1@gmail.com', // Your email address
      pass: 'ybof esbc efrn hulr', // Your email password
    },
  });

  const mailOptions = {
    from: email,
    to: 'vinaykumardag1@gmail.com', // The email address you want to send to
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
