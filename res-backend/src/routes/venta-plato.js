const { Router } = require('express')
const { postVentaPlato, getById } = require("../controllers/venta-plato")

const router = Router()

router
    .post('/', postVentaPlato)
    .get('/:id', getById);

module.exports = router