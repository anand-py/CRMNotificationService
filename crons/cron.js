const cron = require('node-cron')
const ticketNotificationModels = require('../models/ticketNotification.models')

cron.schedule('*/30 * * * * *', async()=>{
    const notification = await ticketNotificationModels.find({
        sentStatus : "UN_SENT"
    })
    notification.forEach(notification=>{
        const mailData ={
            from : "crm-notification-service@gmail.com",
            to : notification.recipientEmails,
            subject : notification.subject,
            text : notification.content
        };
        EmailTransporter.sendMail(mailData, async function(err,info){
            if(err){
                console.log(err.message);
            }else{
                savedNotification = await ticketNotificationModels.findOne({_id : notification._id})
                savedNotification.sendStatus = "SENT"
                await savedNotification.save()
            }
        })   
    })
})

