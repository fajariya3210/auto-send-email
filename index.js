const nodemailer = require("nodemailer");
const cron = require('node-cron');

cron.schedule('* * * * * *', function(){

  async function main() {
    
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: 'fajarcare@gmail.com',
          pass: 'Fajar_karwo32'
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'fajarcare@gmail.com', 
      to: "itgriptha@gmail.com,angkasarayanet@gmail.com", 
      subject: "Hello ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>" 
    });
  
    console.log("Email berhasil di kirim")
  }
  
  main().catch(console.error);
})




// const sendMail = require('@sendgrid/mail');
// sendMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//     to: 'fajarcare@gmail.com',
//     from: 'itgriptha@gmail.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   sendMail.send(msg);