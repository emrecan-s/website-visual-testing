var nodemailer = require('nodemailer');
require('dotenv').config()
var fs = require('fs');

let pngs = []
//Find all diffs to attached to the mail
const testFolder = './__output__/image_diff/';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    let png= {
    filename: file,
    path: `./__output__/image_diff/${file}`,
    contentType: 'image/png'
  }
  pngs.push(png)
  });
});







var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
});


//Upto 25 mb attachment this method will work well, after this you need to upload them to the gdrive/amzon s3 etc.


fs.readFile('test-report.html', {encoding: 'utf-8'}, function (err, html) {
  if (err) {
    console.log(err);
  } else {
    const mailOptions = {
    from: process.env.USERNAME, // sender address
    to: 'emreca.sanli@gmail.com', // list of receivers
    subject: 'test mail1', // Subject line
    html: html, // plain text body
    attachments: pngs
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