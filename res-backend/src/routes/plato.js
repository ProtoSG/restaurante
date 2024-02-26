const { Router } = require('express')
const { newPlato, getAll, getById } = require('../controllers/plato')

const router = Router()

router
    .post('/', newPlato)
    .get('/', getAll)
    .get('/:id', getById);

module.exports = router