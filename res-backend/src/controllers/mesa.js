const { insertMesa, getAllMesa, getMesaById } = require('../models/mesa')

const newMesa = async (req, res) => {
    const { name } = req.body;
    
    const response = await insertMesa({name})
    res.status(201)
    res.send(response)
}

const getAll = async (req, res) => {
    const mesas = await getAllMesa();
    res.send(mesas);
}

const getById = async (req, res) => {
    const {id} = req.params;

    const mesa = await getMesaById({id})
    res.send(mesa)
}

module.exports = { newMesa, getAll, getById }