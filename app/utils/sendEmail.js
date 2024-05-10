const nodemailer = require('nodemailer');


exports.sendMail = async (options) => {

  console.log(process.env.EMAIL_ADDRESS);
  console.log(process.env.EMAIL_PASS);

  const transporter = nodemailer.createTransport({
    // service: "hotmail",
    host: "smtp-relay.brevo.com",
    port: 465,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS
    }
  });

  //  const mailOptions = {
  //    from: options.from,
  //    to: options.to,
  //    subject: options.subject,
  //    html: options.html
  //  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Email Sent")
    }
  });

};
