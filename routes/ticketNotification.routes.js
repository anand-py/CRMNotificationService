const notificationController = require('../controllers/ticketNotification.controller')

const express = require("express");
const router = express.Router();
router.use(express.json());


router.post('/notifServ/api/v1/notifications', notificationController.acceptNotificationRequest)
router.get('/notifServ/api/v1/notifications/:id', notificationController.getNotificationStatus)

router.all('/notifServ/api/v1/notifications', (req, res) => {
    res.status(405).send('Method Not Allowed');
  });
module.exports = router;