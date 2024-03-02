const { insertVenta, getAllVentas, getVentaById, getLastVenta, updateVenta, sumTotal} = require('../models/venta')

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

    const venta = await getVentaById({id});
    res.status(201)
    res.send(venta)
}

const getLast = async(req, res) => {
    const {id} = req.params
    const venta = await getLastVenta({id});
    res.send(venta)
}

const putVenta = async(req, res) => {
    const {id} = req.params;
    const {estado, yape} = req.body;
    const response = await updateVenta({estado, id, yape});
    res.status(201)
    res.send(response)
}

const getTotal = async(req, res) => {
    const {date} = req.params;
    const total = await sumTotal({date})
    res.send(total)
}

module.exports = {newVenta, getAll, getById, getLast, putVenta, getTotal}