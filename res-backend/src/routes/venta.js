const { Router } = require('express') 
const { newVenta, getAll, getById, getLast, putVenta, getTotal} = require('../controllers/venta')

const router =  Router()

router.get('/last/:id', getLast);
router.get('/total/:date', getTotal)
router.get('/', getAll)
router.get('/:id', getById)
router.post('/', newVenta)
router.put('/:id', putVenta)

module.exports = router