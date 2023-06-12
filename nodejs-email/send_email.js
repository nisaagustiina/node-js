var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'nisa@4visionmedia.com',
        pass: 'Mail@772022**'
    }
});

var mailOption = {
    from : 'nisa@4visionmedia.com',
    to: '08nisaagustina@gmail.com',
    subject:'Sending email using nodejs',
    text: 'thats easy',
    // html: '<h1>Welcome</h1><p>That was easy!</p>'
    attachments:[
        {
            filename: 'text1.txt',
            content: 'hello world'
        }
    ]
};

transporter.sendMail(mailOption, (err,info) => {
    if(err) throw err;
    console.log('Email sent: '+info.res);
})