const { Router } = require('express')
const { registerAdmin } = require('../controllers/administrador')
const { validateCreateAdmin } = require('../validators/administrador')

const router = Router()

router.post('/', validateCreateAdmin, registerAdmin)

module.exports = router