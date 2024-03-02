const { Router } = require('express')
const { postVentaPlato, getById, deleteVP } = require("../controllers/venta-plato")

const router = Router()

router
    .post('/', postVentaPlato)
    .get('/:id', getById)
    .delete('/:idVentaPlato', deleteVP);

module.exports = router