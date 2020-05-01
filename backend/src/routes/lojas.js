const express = require('express');
const controller = require('../controllers/lojasController')

const router = express.Router()

router.get('/',controller.index)

router.get('/:id',controller.show)

router.post('/', controller.store)

router.put('/', controller.update)

router.delete('/', controller.destroy)

module.exports =  router