const { Router } = require('express')
const { newMesa, getAll, getById } = require('../controllers/mesa')
const { validateNewMesa } = require('../validators/mesa')

const router = Router()

router
    .get('/', getAll)
    .get('/:id', getById)
    .post('/', validateNewMesa, newMesa);

module.exports = router
