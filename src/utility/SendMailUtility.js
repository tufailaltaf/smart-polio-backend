//External Lib Import
const nodemailer = require("nodemailer");

const SendMailUtility = async (emailTo, emailText, emailSubject,Attachments) => {
  let transporter = await nodemailer.createTransport({
     service: "gmail",
  auth:{
    user:"m.tufail842@gmail.com",
    pass: "ricarxmxqatcibmi"
  }
    // name: "server123.web-hosting.com",
    // host: "server123.web-hosting.com",
    // port: 587,
    // secure: false,
    // auth: {
    //   user: 'testing@goghawelfare.com',
    //   pass: 'TeSplm#1291',
    // },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  const mailOption = {
    from: `Smart Polio <m.tufail842@gmail.com>`,
    to: emailTo,
    subject: emailSubject,
    html: emailText,
    attachments: [
      {
        path: Attachments
      }
    ]
  };

  return await transporter.sendMail(mailOption);
};

module.exports = SendMailUtility;
