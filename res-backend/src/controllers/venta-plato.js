const { insertVentaPlato, getVentaPlatoByid, deleteVentaPlato } = require("../models/venta-plato") 

const postVentaPlato = async(req, res) => {
    const {plato_id, venta_id, cantidad, sub_total} = req.body;

    const response = await insertVentaPlato({plato_id, venta_id, cantidad, sub_total})
    res.status(200)
    res.send(response)
}

const getById = async(req, res) => {
    const {id} = req.params
    const venta_plato = await getVentaPlatoByid({id});
    res.status(201)
    res.send(venta_plato)
}

const deleteVP = async(req, res) => {
    const {idPlato} = req.body;
    const {idVentaPlato} = req.params;

    const response = await deleteVentaPlato({idVentaPlato, idPlato})
    res.status(200)
    res.send(response)
}

module.exports = {postVentaPlato, getById, deleteVP}