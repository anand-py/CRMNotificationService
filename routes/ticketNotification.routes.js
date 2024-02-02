const notificationController = require('../controllers/ticketNotification.controller')

const express = require("express");
const router = express.Router();


router.post('/notifServ/api/v1/notifications', notificationController.acceptNotificationRequest);
router.get('/notifServ/api/v1/notifications/:id', notificationController.getNotificationStatus)
