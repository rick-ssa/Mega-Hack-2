const express = require('express');
const controller = require('../controllers/authentication')


const router = express.Router()

router.post('/' ,controller.auth)

module.exports =  router