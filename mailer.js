var nodemailer = require('nodemailer');
require('dotenv').config()
var fs = require('fs');

let pdfs = []
//Find all diffs to attached to the mail
const testFolder = './__output__/image_diff/';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    let pdf= {
    filename: file,
    path: `./__output__/image_diff/${file}`,
    contentType: 'application/pdf'
  }
  pdfs.push(pdf)
  });
});





console.log('pdfs')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
});





fs.readFile('test-report.html', {encoding: 'utf-8'}, function (err, html) {
  if (err) {
    console.log(err);
  } else {
    const mailOptions = {
    from: process.env.USERNAME, // sender address
    to: 'emreca.sanli@gmail.com', // list of receivers
    subject: 'test mail1', // Subject line
    html: html, // plain text body
    attachments: pdfs
};
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
});