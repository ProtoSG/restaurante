const { insertVenta, getAllVentas, getVentaById} = require('../models/venta')

const newVenta = async(req, res) => {
    const {date, hour, mesa_id, plato_id, cantidad} = req.body;

    const response = await insertVenta({date, hour, mesa_id, plato_id, cantidad});
    res.status(201)
    res.send(response)
}

const getAll = async(req, res) => {
    const ventas = await getAllVentas();
    res.send(ventas)
}

const getById = async(req, res) => {
    const {id} = req.params;

    const venta = await getAllVentas({id});
    res.status(201)
    res.send(venta)
}

module.exports = {newVenta, getAll, getById}