const { Router } = require('express') 
const { newVenta, getAll, getById} = require('../controllers/venta')

const router =  Router()

router
    .get('/', getAll)
    .get('/:id', getById)
    .post('/', newVenta);

module.exports = router