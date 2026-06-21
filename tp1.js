const nodemailer = require('nodemailer');

/*const x = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tutorialpoint.123@gmail.com',
        pass: '******'
    }
});
*/

const x = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'tutorialpoint.123@gmail.com',
        pass: '******'
    }
});

const y = {
    from: 'tutorialpoint.123@gmail.com',
    to: 'tp.143@yahoo.com',
    subject: 'Testing',
    text: 'Hello, Please provide the feedback.!'
};

x.sendMail(y, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
