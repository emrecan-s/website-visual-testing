var nodemailer = require('nodemailer');
require('dotenv').config()
var fs = require('fs');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

//Compress images

(async () => {

  const files = await imagemin(['./__output__/image_diff/*png'], {
    destination: './__output__/optimized',
    plugins: [
      imageminPngquant({
       quality: [0.2, 0.3]
      })
    ]
  });

let pngs = []
//Find all diffs to attached to the mail
const testFolder = './__output__/optimized/';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    let png = {
      filename: file,
      path: `./__output__/optimized/${file}`,
      contentType: 'image/png'
    }
    pngs.push(png)
  });

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





});


})();









//Upto 25 mb attachment this method will work well, after this you need to upload them to the gdrive/amzon s3 etc.

