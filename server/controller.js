const nodemailer = require('nodemailer');
require('dotenv').config();
const {NODEMAILER_EMAIL, EMAIL, PASSWORD} = process.env;

module.exports = {
  sendMail: (req, res) => {
    const {name, phone, email, message} = req.body;
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Phone: ${phone}
          <li>Email: ${email}</li>
        </ul>
        <h3>Message: ${message}</h3>
      `
      const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
            user: NODEMAILER_EMAIL,
            pass: PASSWORD
        }
      });
      let mailOptions = {
        from: NODEMAILER_EMAIL,
        to: EMAIL,
        replyTo: NODEMAILER_EMAIL,
        subject: 'Portfolio Contact',
        text: message,
        html: htmlEmail
      }
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return console.log('unable to send message')
        } else {
          // console.log('Message Sent')
          res.status(200).send({message: 'Message Sent', sent: info})
        }
      })
    })
  }
}