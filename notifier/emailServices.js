const nodemailer = require('nodemailer')

const mailer = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : "anand@gmail.com",
        pass : "anand"
    },
    secure : true,
})

module.exports = {mailer}