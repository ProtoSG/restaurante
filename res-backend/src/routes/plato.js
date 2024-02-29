const { Router } = require('express')
const { newPlato, getAll, getById, getLast, getRank } = require('../controllers/plato');

const router = Router()

router
    .get('/last', getLast)
    .get('/rank/:date', getRank)
    .post('/', newPlato)
    .get('/', getAll)
    .get('/:id', getById);

module.exports = router