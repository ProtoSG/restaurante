const { Router } = require('express')
const { validateLoginCredentials } = require('../validators/login')
const { loginAdmin } = require('../controllers/login')

const router = Router()

router.post('/administrador', validateLoginCredentials, loginAdmin)

module.exports = router