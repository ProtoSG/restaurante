const { Router } = require('express')
const { newMesa, getAll, getById } = require('../controllers/mesa')

const router = Router()

router
    .get('/', getAll)
    .get('/:id', getById)
    .post('/', newMesa);

module.exports = router
