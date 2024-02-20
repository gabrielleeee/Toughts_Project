const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughtController.createTought)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.get('/', ToughtController.showToughts)

module.exports = router